import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GlobalFonts from '../fonts/fonts';
import GraphikWebfont from '../fonts/HKGrotesk-Light.woff';

const MEET = styled.div`
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  color: rgb(34, 34, 34);
  cursor: pointer;
  box-sizing: border-box;
  font-stretch: 100%;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 35px;
`
const MESSAGE = styled.button`
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  border-color: rgb(34, 34, 34);
  border-radius: 24px;
  background-color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  font-stretch:100%;
  line-height: 24px;
  padding: 12px, 18px, 12px, 18px;
  height: 48px;
  width: 323px;
`

const MESSAGEBUTTON = styled(MESSAGE)`
  &&& {
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  border-color: rgb(34, 34, 34);
  border-radius: 24px;
  background-color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  font-stretch:100%;
  line-height: 24px;
  padding: 12px, 18px, 12px, 18px;
  height: 48px;
  width: 323px;
  }
`

const SELLERNAME = styled.div`
  text-decoration-line: underline;
  display: inline;
`
const TIMEFRAME = styled.div`
  font-weight: 500;
  display: inline;
`
const RESPONSE = styled.div`
margin-bottom: 30px !important;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #595959 !important;
  font-weight: 300;
  text-align: left;
  margin: 17px;
`
const SELLERCONTAINER = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`
const SELLERIMG = styled.img`
  height: 75px;
  width: 85px;
  border-radius: 7px;
  height: 100%;
`
const SELLERASIDE = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`
const SHOPOWNER = styled.h2`
  font-family: "Guardian-EgypTT",serif;
  font-weight: lighter;
  display: inline-block;
  letter-spacing: 0.35px;
  font-size: 26px;
  line-height: 32px;
  color: #595959 !important;
  margin-bottom: 6px;
  margin-block-end: 6px;
  margin-left: 6px;
`
const OWNER = styled.div`
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #595959 !important;
  font-weight: 300;
  line-height: 24px;
`

function Seller(props) {
  return (
    <div>
      <MEET>Meet your seller</MEET>
      <SELLERCONTAINER>
        <SELLERIMG src="https://picsum.photos/75"></SELLERIMG>
        <SELLERASIDE>
          <SHOPOWNER>Shop Owner</SHOPOWNER>
          <OWNER>Owner of <SELLERNAME>{props.seller.seller_name}</SELLERNAME></OWNER>
        </SELLERASIDE>
      </SELLERCONTAINER>
      <MESSAGEBUTTON>Message {props.seller.seller_name}</MESSAGEBUTTON>
      <RESPONSE>This seller usually responds <TIMEFRAME>within a few hours.</TIMEFRAME></RESPONSE>
    </div>
  )
}

export default Seller;
