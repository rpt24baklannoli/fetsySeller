import React from 'react';
import ReactDOM from 'react-dom';
import ProductTile from './ProductTile.jsx';

function MoreFromShop(props) {
  let items = props.items.slice(0, 4);
  let images = props.images.slice(0, 4);
  return (
    <div>
      <h2>More from this Shop</h2>
      <button>See more</button>
      {items.map((item, index) =>
        <ProductTile item={item} image={images[index]} seller={props.seller}/>
      )}
    </div>
  )
}

export default MoreFromShop;
