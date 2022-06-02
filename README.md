# sellix-js

An unofficial JS wrapper for the Selix.io API

![npm](https://img.shields.io/npm/v/sellix-js) ![Downloads](https://img.shields.io/npm/dw/sellix-js) ![Sellix](<https://img.shields.io/badge/Sellix-v1%20(latest)-orange>)

---

## Installation

```bash
yarn add sellix-js
```

or

```bash
npm install sellix-js
```

## Usage

### Creating an instance

```js
import SellixAPI from 'sellix-js';

// A Sellix API key must be provided, which can be made in the Sellix dashboard.

const sellix = new SellixAPI({
    apiKey: 'mySellixApiKey',
});
```

### Current instance methods

Currently, the wrapper only has support for the following methods, but these will be updated in the future.

-   Customers
    -   getCustomers
    -   getCustomer
    -   createCustomer
    -   updateCustomer
-   Products
    -   getProducts
    -   getProduct
    -   createProduct
    -   updateProduct
-   Payments
    -   createPayment
    -   voidPayment

### Using a method

This library uses Promises, so you can use either

```js
console.log(await sellix.getCustomers());
```

or

```js
sellix.getCustomers().then((customers) => {
    console.log(customers);
});

/* 
{
    "data": {
        "customers": [
            {
                "id": "cst_8s61b2g7atm9s892",
                "name": "Joe",
                "surname": "Bloggs"
                "email": "example@example.com",
                "phone": 12345678900,
                "phone_country_code": "GB",
                "street_address": "Buckingham Palace",
                "city": "London",
                "postal_code": "SW1A 1AA",
                "state": "United Kingdom",
                "country_code": "GB",
                "additional_address_info": null,
                "email": "example@example.com",
                
                
            }
        ]
    },
    "env": "production",
    "error": null,
    "log": null,
    "message": null,
    "status": 200
}
*/
```

### Typescript

This library is written in Typescript and therefore is typed, eg:

```js
import SellixAPI, { SellixCustomer } from 'sellix-js';

const sellix = new SellixAPI({
    apiKey: 'mySellixApiKey',
});

const res: GetCustomersResponse = await sellix.getCustomers();
console.log(res.data.customers);

/* 
{
    "data": {
        "customers": [
            {
                "id": "cst_8s61b2g7atm9s892",
                "name": "Joe",
                "surname": "Bloggs"
                "email": "example@example.com",
                "phone": 12345678900,
                "phone_country_code": "GB",
                "street_address": "Buckingham Palace",
                "city": "London",
                "postal_code": "SW1A 1AA",
                "state": "United Kingdom",
                "country_code": "GB",
                "additional_address_info": null,
                "email": "example@example.com",
                
                
            }
        ]
    },
    "env": "production",
    "error": null,
    "log": null,
    "message": null,
    "status": 200
}
*/
```

## Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by Sellix.io or any of its affiliates or subsidiaries.
This is an independent and unofficial project. Use at your own risk.

## Licensing/Copyright

Copyright (c) 2022 Lucas Rebato

This code is licensed under the MIT license, see [LICENSE](https://github.com/rebal15/sellix-js/blob/main/LICENSE) for details.
