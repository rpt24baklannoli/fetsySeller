import React from 'react';
import ReactDOM from 'react-dom';


function Seller(props) {
  return (
    <div>
      <div>Meet your sellers</div>
      <h2>Shop Owner</h2>
      <div>Owner of {props.seller.seller_name}</div>
      <h3>Message {props.seller.seller_name}</h3>
      <div>This seller usually responds within a few hours.</div>
    </div>
  )
}

export default Seller;
