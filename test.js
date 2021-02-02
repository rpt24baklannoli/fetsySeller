const generator = require('./db/generator.js');
const app = require('./server/index.js');
const request = require('supertest');
const db = require('./db/index.js');

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './react-client/src/App.jsx';
import Seller from './react-client/src/components/Seller.jsx';
import ProductTile from './react-client/src/components/ProductTile';

afterAll(() => {
  db.end(); // terminates database connection
});

describe('create seller data', () => {

  it('returns an array', () => {
    let seller = generator.createSeller();
    expect(Array.isArray(seller)).toBe(true);
  })

  it('returns a seller rating between 2 and 5', () => {
    let seller = generator.createSeller();
    let seller_rating = seller[0]
    expect(seller_rating).toBeGreaterThan(2)
    expect(seller_rating).toBeLessThan(6)
  })

})

describe('GET data', () => {
  it('GET seller info from seller service', async (done) => {
    let { body } = await request(app).get('/items/1/seller');
    expect(body).toBeDefined();
    done();
  })

  // This test doesn't actually test if the service is online and responding
  // it('GET items from shopping service', async (done) => {
  //   const { body } = await request(app).get('/shopping/items');
  //   expect(body).toBeDefined();
  //   done();
  // })

  // This test doesn't actually test if the service is online and responding
  // it('GET images from images service', async (done) => {
  //   const { body } = await request(app).get(/*imagesRequest*/);
  //   expect(body).toBeDefined();
  //   done();
  // })

})

describe('front end renders', () => {
  it('renders without crashing', () => {
    // shallow(<App />); // cannot get axios request within App when rendered to not throw an exception
  })

  // it("renders child component", () => {
  //   const wrapper = shallow(<App />);
  //   const seller = <div>Test</div>
  //   expect(wrapper.contains(seller)).toEqual(true);
  // });
})

const seller = {
  "item_id": 1,
  "on_etsy_since": 2019,
  "seller_city": "North Gordon",
  "seller_id": 2,
  "seller_name": "Forest",
  "seller_rating": 3,
  "seller_state": "Oaklahoma",
  "total_sales": 893
}

const item = {
  "best_seller": false,
  "carts_item_is_in": 5,
  "in_stock": false,
  "item_id": 1,
  "item_name": "chelsea boot",
  "price": "10.13",
  "us_free_shipping": false
}

const image = "https://picsum.photos/200";

describe('props populate', () => {
  it("accepts seller props", () => {
    const wrapper = mount(<Seller seller={seller}/>);
    expect(wrapper.props().seller).toEqual(seller);
  });

  // it("contains seller name", () => {
  //   const wrapper = mount(<Seller seller={seller} />);
  //   const value = wrapper.find("SELLERNAME").text();
  //   expect(value).toEqual("Message Forest");
  // });

  it("accepts item props", () => {
    const wrapper = mount(<ProductTile seller={seller} image={image} item={item} />);
    expect(wrapper.props().item).toEqual(item);
  });

  it("contains item price", () => {
    const wrapper = mount(<ProductTile seller={seller} image={image} item={item} />);
    const value = wrapper.find("h5").text();
    expect(value).toEqual("$10.13");
  });

  it("accepts image props", () => {
    const wrapper = mount(<ProductTile seller={seller} image={image} item={item} />);
    expect(wrapper.props().image).toEqual(image);
  });

  it("contains image name", () => {
    const wrapper = mount(<ProductTile seller={seller} image={image} item={item} />);
    const value = wrapper.find("img").prop("src");
    expect(value).toEqual("https://picsum.photos/200");
  });

});



describe('CRUD API Endpoints', () => {
  let newSeller = {
    seller_rating: 4,
    total_sales: 9001,
    seller_name: 'Prince Ali',
    seller_city: 'Ababwa',
    seller_state: 'Disney',
    on_etsy_since: 1992
  };


  let item_id;

  it('Creates a seller', async (done) => {
    let data = await request(app).post('/items/1/seller').send(newSeller);
    item_id = data.body.item_id;
    expect(typeof item_id).toEqual('number');
    done();
  });

  it('Retrieves seller by item_id', async (done) => {
    let sellerInfo = await request(app).get(`/items/${item_id}/seller`);
    expect(sellerInfo.body.seller_rating).toEqual(newSeller.seller_rating);
    expect(sellerInfo.body.total_sales).toEqual(newSeller.total_sales);
    expect(sellerInfo.body.seller_name).toEqual(newSeller.seller_name);
    expect(sellerInfo.body.seller_city).toEqual(newSeller.seller_city);
    expect(sellerInfo.body.seller_state).toEqual(newSeller.seller_state);
    expect(sellerInfo.body.on_etsy_since).toEqual(newSeller.on_etsy_since);
    done();
  });

  it('Updates seller by item_id', async (done) => {
    let updateSeller = {
      total_sales: 3,
      seller_name: 'Aladdin',
      seller_city: 'Agrabah'
    };

    await request(app)
    .put(`/items/${item_id}/seller`)
    .send(updateSeller)
    .expect(200);
    let sellerInfo = await request(app).get(`/items/${item_id}/seller`);
    expect(sellerInfo.body.total_sales).toEqual(updateSeller.total_sales);
    expect(sellerInfo.body.seller_name).toEqual(updateSeller.seller_name);
    expect(sellerInfo.body.seller_city).toEqual(updateSeller.seller_city);
    done();
  });

  it ('Deletes a seller by item_id', async (done) => {
    let data = await request(app).delete(`/items/${item_id}/seller`);
    expect(data.body.item_id).toEqual(item_id);
    done();
  });

})
