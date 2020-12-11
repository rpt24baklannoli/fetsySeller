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

const RECOMMENDATION = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;
`

function Recommendations(props) {
  let items = props.items.slice(4, 8);
  let images = props.images.slice(4, 8);
  return (
    <div>
      <H2>You may also like</H2>
      <button>See more</button>
      <RECOMMENDATION id="recommendations-container">
        {items.map((item, index) =>
          <ProductTile item={item} image={images[index].image_url} seller={props.seller} />
        )}
      </RECOMMENDATION>
    </div>
  )
}

export default Recommendations;
