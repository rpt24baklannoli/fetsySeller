# Welcome to Fetsy Seller

Get started
- Run `git clone https://github.com/rpt24baklannoli/fetsySeller.git`
- Run `npm install`
- Run `npm run db:setup` and `npm run db:seed`
- Run `npm run dev:react`
- Run `npm start`

Endpoints
- `/items/:item_id/seller` response will be seller information for given item_id
```
{
  "seller_id": 1,
  "seller_rating": 4,
  "total_sales": 201,
  "seller_name": "Annamae.Willms37",
  "seller_city": "Ellatown",
  "seller_state": "New York",
  "on_etsy_since": 2015,
  "item_id": 1
}
```

<a name="crud"></a>
# CRUD Documentation

This service supports full CRUD functionality, available for testing with Postman. Not all functionality is utilized by the front end.

## Summary
| Methods  | URL Endpoints | Actions |
| :------- | :------------ | :------ |
| GET | /items/:item_id/seller  | Retrieve seller info for a given item |
| POST | /items/:item_id/seller | Add a new seller for a given item |
| PUT | /items/:item_id/seller | Update the seller info for a given item |
| DELETE | /items/:item_id/seller | Delete seller info for a given item |

## Read (GET) Seller Information
> Example use case: retrieve seller information for an item

#### Input
```sh
Endpoint: '/items/:item_id/seller'
```
#### Output
```sh
Sample Response:
{
  "seller_id": 1,
  "seller_rating": 4,
  "total_sales": 201,
  "seller_name": "Annamae.Willms37",
  "seller_city": "Ellatown",
  "seller_state": "New York",
  "on_etsy_since": 2015,
  "item_id": 1
}
```

## Create (POST) a New Seller
> Example use case: add a new seller to the database for an item

#### Input
> Note: item_id auto increments and is not required in the request body.

```sh
Endpoint: '/items/:item_id/seller'

Request Body Example:
{
  "seller_rating": 3,
  "total_sales": 25,
  "seller_name": Ashley Kelly,
  "seller_city": Falls Church,
  "seller_state": Georgia,
  "on_etsy_since": 1995
}
```
#### Output
> Success: 200 status code, and a response of "Successfully added new seller"

> Error: 404 status code, and a response of "Failed to add new seller, Error: {error}"

## Update (PUT) Seller Information
> Example use case: change information for a seller of a given item

#### Input
> Note: values for seller_(name, city, state) must be within single quotes
```sh
Endpoint: '/items/:item_id/seller'

Request Body Example:
{
  "seller_rating": 3,
  "total_sales": 25,
  "seller_name": 'Ashley Kelly',
  "seller_city": 'Falls Church',
  "seller_state": 'Georgia',
  "on_etsy_since": 1995
}

```
#### Output
> Success: 200 status code, and a response of "Successfully updated seller information"

> Error: 404 status code, and a response of "Failed to update seller information, Error: {error}"

## Remove (DELETE) a Seller
> Example use case: remove a seller of a given item

#### Input
```sh
Endpoint: '/items/:item_id/seller'
```
#### Output
> Success: 200 status code, and a response of "Successfully deleted seller"

> Error: 404 status code, and a response of "Failed to delete seller, Error: {error}"