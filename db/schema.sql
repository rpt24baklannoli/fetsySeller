DROP DATABASE IF EXISTS seller;

CREATE DATABASE seller;

\c seller;

DROP TABLE IF EXISTS seller_info;

CREATE TABLE seller_info (
  seller_id SERIAL PRIMARY KEY,
  seller_rating integer,
  total_sales integer,
  seller_name varchar,
  seller_city varchar,
  seller_state varchar,
  on_etsy_since integer
  -- CONSTRAINT fk_item
  --   FOREIGN KEY(item_id)
  --     REFERENCES items(item_id)
)
