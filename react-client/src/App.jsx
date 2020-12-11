import React from 'react';
import Seller from './components/Seller.jsx';
import MoreFromShop from './components/MoreFromShop.jsx';
import Recommendations from './components/Recommendations.jsx';
import axios from 'axios';
import styled from 'styled-components';

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
  width: 75%;
`

const SELLER = styled.div`
  width: 25%;
  height: 200px;
`

const MORE = styled.div`
  width: 50%;
  background-color: rgb(248, 235, 230);
`

const RECOMMENDATIONS = styled.div`
  background-color: rgb(248, 235, 230);
  width: 50%;
`
const SPACE = styled.div`
  width: 100%;
  height: 30px;
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
  }

  componentDidMount() {
    let that = this;
    let item_id = window.location.pathname.slice(7, 8);
    console.log(item_id)
    let sellerRequest = axios.get(`/items/${item_id}/seller`);
    let itemsRequest = axios.get('/shopping/items');
    let imagesRequest = axios.get('/item/images/distinct');
console.log('got here one')
    axios.all([sellerRequest, itemsRequest, imagesRequest]).then(axios.spread((...responses) => {
      const sellerResponse = responses[0];
      const itemsResponse = responses[1];
      const imagesResponse = responses[2];
console.log('got here two')
      that.setState({
        itemId: item_id,
        seller: sellerResponse.data.rows[0],
        recommendations: itemsResponse.data,
        images: imagesResponse.data.rows
      })

    })).catch(errors => {
      console.log(errors);
    })

  }

  render() {
    return (
      <FLEXCONTAINER id="container">
        <EMPTYDIV id="empty-module"></EMPTYDIV>
        <SELLER id="seller-module">
          <Seller seller={this.state.seller} />
        </SELLER>
        <SPACE></SPACE>
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
