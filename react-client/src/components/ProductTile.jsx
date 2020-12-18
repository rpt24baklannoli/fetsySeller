import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import FreeShipping from './FreeShipping.jsx';

const FIGURE = styled.figure`
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 50%;
  min-height: 50%;
  width: 40%;
  padding: 9px, 9px, 9px, 9px;
  position: relative;
  text-size-adjust: 100%;
  border-radius: 7px;
  margin-right: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  :hover{
    background-color: white;
    box-shadow: 5px, 5px, 5px, rgb(220,220,220)
  }
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
  margin: 9px, 9px, 9px, 9px;
`

function ProductTile(props) {
  let shipping;
  if (props.item.us_free_shipping) {
    shipping = <FreeShipping />
  }
  return (
    <FIGURE class="tile">
      <IMG src={props.image}></IMG>
      <ITEM>{props.item.item_name}</ITEM>
      <DIV>{props.seller.seller_name}</DIV>
      <H5>${props.item.price}</H5>
      <DIV>{shipping}</DIV>
    </FIGURE>
  )
}

export default ProductTile;
