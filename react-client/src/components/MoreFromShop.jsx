import React from 'react';
import ReactDOM from 'react-dom';
import ProductTile from './ProductTile.jsx';
import styled from 'styled-components';

const CONTAINER = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  margin-top: 20px;
`

const H2 = styled.h2`
  font-family: "Guardian-EgypTT",serif;
  font-size: 32px;
  line-height: 36px;
  font-weight: 50;
  letter-spacing: 0.5px;
  color: rgb(34, 34, 34)
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

const MOREFROMSHOP = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;
`

function MoreFromShop(props) {
  let items = props.items.slice(0, 4);
  let images = props.images.slice(0, 4);
  return (
    <div>
      <CONTAINER>
        <H2>More from this Shop</H2>
        <BUTTON>See more</BUTTON>
      </CONTAINER>
      <MOREFROMSHOP id="more-from-shop-container">
        {items.map((item, index) =>
          <ProductTile id="tile" item={item} image={images[index].image_url} seller={props.seller}/>
        )}
      </MOREFROMSHOP>
    </div>
  )
}

export default MoreFromShop;
