import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const H2 = styled.h2`
  font-family: "Guardian-EgypTT",serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 20px;
  color: #595959 !important;
`

const H3 = styled.h3`
  font-family: "Guardian-EgypTT",serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 16px;
  color: #595959 !important;
`

const DIV = styled.div`
  font-family: "Guardian-EgypTT",serif;
  font-size: 16px;
  color: #595959 !important;
  font-weight: 700;
  line-height: 24px;
`
const SELLERIMG = styled.img`
  height: 75px;
  width: 85px;
  border-radius: 7px;
`

function Seller(props) {
  return (
    <DIV>
      <SELLERIMG src="https://picsum.photos/75"></SELLERIMG>
      <DIV>Meet your sellers</DIV>
      <H2>Shop Owner</H2>
      <DIV>Owner of {props.seller.seller_name}</DIV>
      <H3>Message {props.seller.seller_name}</H3>
      <DIV>This seller usually responds within a few hours.</DIV>
    </DIV>
  )
}

export default Seller;
