import React from 'react';
import ReactDOM from 'react-dom';
import ProductTile from './ProductTile.jsx';
import styled from 'styled-components';

const H2 = styled.h2`
  font-family: "Guardian-EgypTT",serif;
  font-size: 32px;
  line-height: 36px;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #222222;
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
  font-size: 13px;
  color: #595959 !important;
`
const BUTTON = styled.button`
  background-color: rgba(0, 0, 0, 0);
  margin-left: 6px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  border-bottom-color: rgb(34, 34, 34);
  border-radius: 25px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

function MoreFromShop(props) {
  let items = props.items.slice(0, 4);
  let images = props.images.slice(0, 4);
  return (
    <div>
      <H2>More from this Shop</H2>
      <button>See more</button>
      <div id="more-from-shop-container">
        {items.map((item, index) =>
          <ProductTile id="tile" item={item} image={images[index].image_url} seller={props.seller}/>
        )}
      </div>
    </div>
  )
}

export default MoreFromShop;
