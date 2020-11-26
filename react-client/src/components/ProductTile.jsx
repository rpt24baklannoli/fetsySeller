import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const DIV = styled.div`
  font-family: "Guardian-EgypTT",serif;
  font - weight: 300;
  font - size: 13px;
  line - height: 18px;
  text-overflow: elipsis !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  min-width: 0 !important;
  color: rgb(34, 34, 34);
`
const H5 = styled.h5`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font - weight: 500;
  font - size: 16px;
  line - height: 20px;
`
const IMG = styled.img`
  width: 100px;
  height: 100px;
`

function ProductTile(props) {
  let shipping;
  if (props.item.us_free_shipping) {
    shipping = 'Free shipping eligible';
  }
  return (
    <div>
      <IMG src={props.image}></IMG>
      <DIV>{props.item.item_name}</DIV>
      <DIV>{props.seller.seller_name}</DIV>
      <H5>${props.item.price}</H5>
      <DIV>{shipping}</DIV>
    </div>
  )
}

export default ProductTile;
