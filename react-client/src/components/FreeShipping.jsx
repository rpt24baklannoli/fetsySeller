import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const SHIPPING = styled.div`
  border-radius: 10px;
  background-color: #D4E9D7;
  color: #222;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 11px;
  font-weight: bold;
  padding: 4px, 6px, 4px, 6px;
  width: 90px;
  white-space: nowrap;
  padding-left: 5px;
`
function FreeShipping(props) {
  return (
    <SHIPPING>FREE shipping</SHIPPING>
  )
}

export default FreeShipping;
