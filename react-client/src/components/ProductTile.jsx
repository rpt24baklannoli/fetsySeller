import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FIGURE = styled.figure`
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


const ITEM = styled.div`
  white-space: nowrap;
  text-overflow: elipsis;
  width: 200px;
  display: block;
  overflow: hidden;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font - weight: 300;
  font - size: 13px;
  line - height: 18px;
  min-width: 0 !important;
  rgb(34, 34, 34);
`
const DIV = styled.div`
  text-overflow: elipsis;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font - weight: 300;
  font - size: 13px;
  line - height: 18px;
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
  width: 200px;
  height: 180px;
  border-radius: 7px;
  cursor: pointer;

`

function ProductTile(props) {
  let shipping;
  if (props.item.us_free_shipping) {
    shipping = 'Free shipping eligible';
  }
  return (
    <FIGURE class="flex-item">
      <IMG src={props.image}></IMG>
      <ITEM>{props.item.item_name}</ITEM>
      <DIV>{props.seller.seller_name}</DIV>
      <H5>${props.item.price}</H5>
      <DIV>{shipping}</DIV>
    </FIGURE>
  )
}

export default ProductTile;
