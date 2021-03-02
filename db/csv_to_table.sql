-- connect to database
\c seller;

-- import data into seller_info from sellers.csv
COPY seller_info FROM '/Users/joselopez/Documents/Hack-Reactor/SDC/fetsySeller/db/sellers.csv' WITH (FORMAT CSV, HEADER);

-- seller_id & item_id serials that are now out of sync due to large data insertion
SELECT setval(pg_get_serial_sequence('seller_info', 'seller_id'), (SELECT MAX(seller_id) FROM seller_info));
SELECT setval(pg_get_serial_sequence('seller_info', 'item_id'), (SELECT MAX(item_id) FROM seller_info));