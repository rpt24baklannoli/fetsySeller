import React from 'react';
import ReactDOM from 'react-dom';

function ProductTile(props) {
  return (
    <div>
      <img src={props.image}></img>
      <div>{props.item.item_name}</div>
      <div>{props.seller.seller_name}</div>
      <div>{props.item.price}</div>
      <div>Free shipping eligible</div>
    </div>
  )
}

export default ProductTile;
