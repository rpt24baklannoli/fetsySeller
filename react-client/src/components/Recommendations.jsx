import React from 'react';
import ReactDOM from 'react-dom';
import ProductTile from './ProductTile.jsx';

function Recommendations(props) {
  let items = props.items.slice(4, 8);
  let images = props.images.slice(4, 8);
  return (
    <div>
      <h2>You may also like</h2>
      <button>See more</button>
      {items.map((item, index) =>
        <ProductTile item={item} image={images[index]} seller={props.seller} />
      )}
    </div>
  )
}

export default Recommendations;
