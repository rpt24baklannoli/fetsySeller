import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FIGURE = styled.figure`
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  min-width: 0 !important;
  box-sizing: border-box;
  display: block;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 50%;
  min-height: 50%;
  padding-bottom: 9px;
  padding-right: 9px;
  padding-left: 9px;
  padding-top: 9px;
  position: relative;
  text-size-adjust: 100%;
`

const DIV = styled.div`
  text-overflow: elipsis !important;
  overflow: hidden !important;
  font-family: "Guardian-EgypTT",serif;
  font - weight: 300;
  font - size: 13px;
  line - height: 18px;
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
  width: 150px;
  height: 150px;
  border-radius: 7px;
`

function ProductTile(props) {
  let shipping;
  if (props.item.us_free_shipping) {
    shipping = 'Free shipping eligible';
  }
  return (
    <FIGURE class="flex-item">
      <IMG src={props.image}></IMG>
      <DIV>{props.item.item_name}</DIV>
      <DIV>{props.seller.seller_name}</DIV>
      <H5>${props.item.price}</H5>
      <DIV>{shipping}</DIV>
    </FIGURE>
  )
}

export default ProductTile;
