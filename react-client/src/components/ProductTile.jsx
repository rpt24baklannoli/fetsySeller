import React from 'react';
import ReactDOM from 'react-dom';

function ProductTile(props) {
  return (
    <div>
      <image src={props.image}></image>
      <div>{props.item.item_name}</div>
      <div>{props.seller.seller_name}</div>
      <div>{props.item.price}</div>
      <div>Free shipping eligible</div>
    </div>
  )
}

export default ProductTile;
