DROP DATABASE IF EXISTS recommendations;

CREATE DATABASE recommendations;

USE recommendations;

CREATE TABLE IF NOT EXISTS recommended_items (
  id integer PRIMARY KEY,
  item_name varchar,
  seller_name varchar,
  price integer,
  image_url varchar,
  keywords varchar[]
)
