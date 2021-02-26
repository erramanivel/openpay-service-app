# Clip Customers App

This NodeJS with Typescript API contains the functionality to get,create and update customers from an OpenPay account.

# Install

Run command: 
 `npm install`
  
# Usage

Note In order to get this application working you should run this project with the following arguments:

`
 `ENV_TYPE=stage OPEN_API_KEY={your_open_api_key} MERCHANT_ID={your_merchant_id} npm run dev`

Runs the app in the development mode with nodemon.\
Open [http://localhost:8000](http://localhost:8000) to hit it in the browser.
The page will reload if you make edits.\

 `npm run build`

Builds the api for deployment to the `dist` folder.\

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `ENV_TYPE=stage OPEN_API_KEY={your_open_api_key} MERCHANT_ID={your_merchant_id} npm run start`
Runs the app in the compilated mode.\
Open [http://localhost:8000](http://localhost:8000) to hit it in the browser.

### `ENV_TYPE=stage OPEN_API_KEY={your_open_api_key} MERCHANT_ID={your_merchant_id} npm run test`
Runs the unit test with jest.

# API endpoints:
Get the customers list: 
GET:

`http://localhost:8000/api/v1/customers?offset={initialCount}&limit{finalCount}`

Retrieves you the customers list of your openpay account with initialCount initial point and limit is the max of customer to bring. By default this values are 0 and 10.

Create a customer:
POST:

`http://localhost:8000/api/v1/customers`

`bodyRequest: {  "name": String, "email": String }`

Creates a new customer and retrieves a 201 if customer was created..

Create a customer:
PUT:

`http://localhost:8000/api/v1/customers/{customerId}`

`bodyRequest: {  "name": String, "email": String }`

Updates a customer based on the ID retrieves a 204 if customer was updated.





