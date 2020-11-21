import React from 'react';
import ReactDOM from 'react-dom';
import Seller from './components/Seller.jsx';
import MoreFromShop from './components/MoreFromShop.jsx';
import Recommendations from './components/Recommendations.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: null,
      seller: [],
      recommendations: [],
      images: [
        'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200'
      ]
    }
  }

  componentDidMount() {
   let that = this;
   let item_id = window.location.pathname.slice(7, 8);

   let sellerRequest = axios.get(`/items/${item_id}/seller`);
   let itemsRequest = axios.get('/shopping/items');
  //  let imagesRequest = axios.get('/seller/images');

   axios.all([sellerRequest, itemsRequest, /*imagesRequest*/ ]).then(axios.spread((...responses) => {
     const sellerResponse = responses[0];
     const itemsResponse = responses[1];
    //  const imagesResponse = responses[2];

    that.setState({
       itemId: item_id,
       seller: sellerResponse.data.rows[0],
       recommendations: itemsResponse.data,
      //  images: imagesResponse.data
     })

   })).catch(errors => {
     console.log(errors);
   })

  }

  render() {
    return (
      <div>
        <Seller seller={this.state.seller} />
        <MoreFromShop items={this.state.recommendations} images={this.state.images} seller={this.state.seller} />
        <Recommendations items={this.state.recommendations} images={this.state.images} seller={this.state.seller} />
      </div>
    )
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
