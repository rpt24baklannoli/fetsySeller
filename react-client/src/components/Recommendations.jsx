import React from 'react';
import ReactDOM from 'react-dom';


function Recommendations(props) {
  let items = props.items.slice(4);
  let images = props.images.slice(4);
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
