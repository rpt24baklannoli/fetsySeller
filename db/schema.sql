DROP DATABASE IF EXISTS seller;

CREATE DATABASE seller;

\c seller;

CREATE TABLE IF NOT EXISTS seller_info (
  seller_id SERIAL PRIMARY KEY,
  seller_rating integer,
  total_sales integer,
  seller_name varchar,
  seller_city varchar,
  seller_country varchar,
  on_etsy_since varchar
  -- CONSTRAINT fk_item
  --   FOREIGN KEY(item_id)
  --     REFERENCES items(item_id)
)
