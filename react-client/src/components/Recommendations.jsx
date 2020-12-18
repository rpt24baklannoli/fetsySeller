import React from 'react';
import ReactDOM from 'react-dom';
import ProductTile from './ProductTile.jsx';
import styled from 'styled-components';

const CONTAINER = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 30px;
  margin-top: 20px;
`
const H2 = styled.h2`
  font-family: "Guardian-EgypTT",serif;
  font-size: 32px;
  line-height: 36px;
  font-weight: lighter;
  letter-spacing: 0.5px;
  color: rgb(34, 34, 34)
`
const BUTTON = styled.button`
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  font-size: 14px;
  padding: 4px, 10px, 4px, 10px;
  width: 90px;
  line-height: 19.6px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  border-bottom-color: rgb(34, 34, 34);
  border-radius: 25px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

const RECOMMENDATION = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-grow: 1;
`
const DIV = styled.div`
  padding-left: 20px;
  padding-right: 70px;
`

function Recommendations(props) {
  let items = props.items.slice(4, 8);
  let images = props.images.slice(4, 8);
  return (
    <DIV>
      <CONTAINER>
        <H2>You may also like</H2>
        <BUTTON>See more</BUTTON>
      </CONTAINER>
      <RECOMMENDATION id="recommendations-container">
        {items.map((item, index) =>
          <ProductTile item={item} image={images[index].image_url} seller={props.seller} />
        )}
      </RECOMMENDATION>
    </DIV>
  )
}

export default Recommendations;
