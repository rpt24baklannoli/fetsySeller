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
      seller: [],
      recommendations: [],
      images: []
    }
  }

  componentDidMount() {
    let that = this;

    // get request for seller data
    axios({
      method: 'get',
      url: '/items/1/seller',
    })
    .then(function(response) {
      that.setState({ seller: response.data.rows[0]});
    })
    .catch(function(error) {
      console.log(error)
    })

    // // get request (loop = 8) for item data
    // let itemRequests = 8;
    // while (itemRequests > 0) {
    //   axios({
    //     method: 'get',
    //     // url: '/seller/items/',
    //   })
    //     .then(function (response) {
    //       itemRequests--;
    //       let joined = that.state.recommendations.concat(response)
    //       that.setState({ recommendations: joined });
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // }

    // // get request (loop = 8) for images
    // let imageRequests = 8;
    // while (imageRequests > 0) {
    //   axios({
    //     method: 'get',
    //     // url: '/seller/items/',
    //   })
    //     .then(function (response) {
    //       imageRequests--;
    //       let joined = that.state.images.concat(response)
    //       that.setState({ images: joined });
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // }
  }

  render() {
    return (
      <div>
        <Seller seller={this.state.seller} />
        <MoreFromShop />
        <Recommendations />
      </div>
    )
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
