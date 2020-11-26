import React from 'react';
import Seller from './components/Seller.jsx';
import MoreFromShop from './components/MoreFromShop.jsx';
import Recommendations from './components/Recommendations.jsx';
import axios from 'axios';
import styled from 'styled-components';

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

    let sellerRequest = axios.get(`/items/${item_id}/seller`);
    let itemsRequest = axios.get('/shopping/items');
    let imagesRequest = axios.get('/item/images/distinct');

    axios.all([sellerRequest, itemsRequest, imagesRequest]).then(axios.spread((...responses) => {
      const sellerResponse = responses[0];
      const itemsResponse = responses[1];
      const imagesResponse = responses[2];

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
      <div id="container">
        <div id="empty-module"></div>
        <div id="seller-module">
          <Seller seller={this.state.seller} />
        </div>
        <div id="more-module">
          <MoreFromShop items={this.state.recommendations} images={this.state.images} seller={this.state.seller} />
        </div>
        <div id="recommendations-module">
          <Recommendations items={this.state.recommendations} images={this.state.images} seller={this.state.seller} />
        </div>
      </div>
    )
  }

}

export default App;
