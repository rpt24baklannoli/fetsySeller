import React from 'react';
import ReactDOM from 'react-dom';

function ProductTile(props) {
  let shipping;
  if (props.item.us_free_shipping) {
    shipping = 'Free shipping eligible';
  }
  return (
    <div>
      <img src={props.image}></img>
      <div>{props.item.item_name}</div>
      <div>{props.seller.seller_name}</div>
      <h5>{props.item.price}</h5>
      <div>{shipping}</div>
    </div>
  )
}

export default ProductTile;
