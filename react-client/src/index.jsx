import React from 'react';
import ReactDOM from 'react-dom';
import Seller from './components/Seller.jsx';
import MoreFromShop from './components/MoreFromShop.jsx';
import Recommendations from './components/Recommendations.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Seller />
        <MoreFromShop />
        <Recommendations />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
