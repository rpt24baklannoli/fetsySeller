import React from 'react';
import Seller from './components/Seller.jsx';
import MoreFromShop from './components/MoreFromShop.jsx';
import Recommendations from './components/Recommendations.jsx';
import axios from 'axios';
import styled from 'styled-components';
import GlobalFonts from './fonts/fonts';
import GraphikWebfont from './fonts/HKGrotesk-Light.woff';


const FLEXCONTAINER = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  *,
  *::before,
  *::after{box-sizing:border-box;}
  figure{margin:0;}
  input::-moz-focus-inner {border:0; padding:0; margin:0;}
  ul, ol, dd{margin:0; padding:0; list-style:none;}
  h1, h2, h3, h4, h5, h6{margin:0}
  p{margin:0;}
  cite {font-style:normal;}
  fieldset{border-width:0; padding:0; margin:0;}
`

const EMPTYDIV = styled.div`
  width: 60%;
`

const SELLER = styled.div`
  width: 40%;
  height: 200px;
`

const MORE = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  background-color: rgb(248, 235, 230);
  margin-top: 50px;
`

const RECOMMENDATIONS = styled.div`
  dislay: flex;
  justify-content: space-between;
  background-color: rgb(248, 235, 230);
  width: 50%;
  margin-top: 50px;
`
const SPACE = styled.img`
  width: 100%;
  height: 40px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: null,
      seller: [],
      recommendations: [],
      images: []
    }
    this.rotateImages = this.rotateImages.bind(this)
  }

  rotateImages(array) {
    let i = 0;
    let rotateNum = Number(this.state.itemId) + Math.random()*100
    while (i < rotateNum) {
      array.unshift(array.pop());
      i++;
    }
    return array;
  }

  componentDidMount() {
    let that = this;
    let item_id = window.location.pathname.slice(7, 8);

    that.setState({
      itemId: item_id
    })

    let sellerRequest = axios.get(`/items/${item_id}/seller`);
    let itemsRequest = axios.get('/shopping/items');
    let imagesRequest = axios.get('/item/images');

    axios.all([sellerRequest, itemsRequest, imagesRequest]).then(axios.spread((...responses) => {
      let sellerResponse = responses[0].data.rows[0];
      let itemsResponse = responses[1].data;
      let imagesResponse = responses[2].data.rows;

      let rotatedImages = this.rotateImages(imagesResponse)

      that.setState({
        seller: sellerResponse,
        recommendations: itemsResponse,
        images: rotatedImages
      })
    })).catch(errors => {
      console.log(errors);
    })

  }

  render() {
    return (
      <FLEXCONTAINER id="container">
        <GlobalFonts />
        <EMPTYDIV id="empty-module"></EMPTYDIV>
        <SELLER id="seller-module">
          <Seller seller={this.state.seller} />
        </SELLER>
        {/* <SPACE></SPACE> */}
        <MORE id="more-module">
          <MoreFromShop items={this.state.recommendations} images={this.state.images} seller={this.state.seller} />
        </MORE>
        <RECOMMENDATIONS id="recommendations-module">
          <Recommendations items={this.state.recommendations} images={this.state.images} seller={this.state.seller} />
        </RECOMMENDATIONS>
      </FLEXCONTAINER>
    )
  }

}

export default App;
