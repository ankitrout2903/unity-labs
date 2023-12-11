# E-commerce Marketplace API Documentation

## Table of Contents

- [E-commerce Marketplace API Documentation](#e-commerce-marketplace-api-documentation)
  - [Table of Contents](#table-of-contents)
  - [Authentication](#authentication)
    - [Register](#register)
    - [Login](#login)
  - [Buyer APIs](#buyer-apis)
    - [Get List of Sellers](#get-list-of-sellers)
    - [Get Seller's Catalog](#get-sellers-catalog)
    - [Create Order](#create-order)
  - [Seller APIs](#seller-apis)
    - [Create Catalog](#create-catalog)
    - [Get Orders](#get-orders)

**Start API**
```
npm install
npm start
```

**Base URL** : `http://localhost:3000`

## Authentication

### Register



**Endpoint**: `POST /api/auth/register`

**Description**: Register a user as a buyer or a seller.

**Request Body**:

```json
{
  "username": "john_doe",
  "password": "securepassword",
  "userType": "buyer"
}
```

**Sample Response**:

```json
{
  "message": "Registration successful"
}
```

### Login

**Endpoint**: `POST /api/auth/login`

**Description**: Log in a registered user and retrieve an authentication token.

**Request Body**:

```json
{
  "username": "john_doe",
  "password": "securepassword"
}
```

**Sample Response**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Buyer APIs

### Get List of Sellers

**Endpoint**: `GET /api/buyer/list-of-sellers`

**Description**: Get a list of all sellers.

**Sample Response**:

```json
[
  {
    "_id": "611f8a51b54b05001435faae",
    "username": "seller1",
    "userType": "seller"
  },
  {
    "_id": "611f8a51b54b05001435faaf",
    "username": "seller2",
    "userType": "seller"
  }
]
```

### Get Seller's Catalog

**Endpoint**: `GET /api/buyer/seller-catalog/:seller_id`

**Description**: Get the catalog of a specific seller by seller ID.

**Sample Response**:

```json
{
  "_id": "61263eae1e593800154d2c3c",
  "seller": {
    "_id": "611f8a51b54b05001435faae",
    "username": "seller1",
    "userType": "seller"
  },
  "products": [
    {
      "_id": "61263eae1e593800154d2c3d",
      "name": "Product 1",
      "price": 19.99
    },
    {
      "_id": "61263eae1e593800154d2c3e",
      "name": "Product 2",
      "price": 29.99
    }
  ]
}
```

### Create Order

**Endpoint**: `POST /api/buyer/create-order/:seller_id`

**Description**: Create an order for a specific seller.

**Request Body**:

```json
{
  "products": [
    {
      "name": "Product 1",
      "price": 19.99
    },
    {
      "name": "Product 2",
      "price": 29.99
    }
  ]
}
```

**Sample Response**:

```json
{
  "message": "Order created successfully"
}
```

## Seller APIs

### Create Catalog

**Endpoint**: `POST /api/seller/create-catalog`

**Description**: Create a catalog of products for the seller.

**Request Body**:

```json
{
  "products": [
    {
      "name": "Product 1",
      "price": 19.99
    },
    {
      "name": "Product 2",
      "price": 29.99
    }
  ]
}
```

**Sample Response**:

```json
{
  "message": "Catalog created successfully"
}
```

### Get Orders

**Endpoint**: `GET /api/seller/orders`

**Description**: Get a list of orders received by the seller.

**Sample Response**:

```json
[
  {
    "_id": "61263ff41e593800154d2c3f",
    "buyer": {
      "_id": "611f8a51b54b05001435faad",
      "username": "buyer1",
      "userType": "buyer"
    },
    "seller": {
      "_id": "611f8a51b54b05001435faae",
      "username": "seller1",
      "userType": "seller"
    },
    "products": [
      {
        "name": "Product 1",
        "price": 19.99
      }
    ]
  }
]
```
