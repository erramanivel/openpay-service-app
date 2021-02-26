# Clip Customers App

This React Application contains the functionality to get,create and update customers from an OpenPay account.

Note In order to get this application working you should run the API of this project (clop-customers-api) in por 8080;

## Available Scripts

In the project directory, you can run:

 `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## TODO 
- Add tests with jest and mocks for UI
- Spinner while resources are loading from API.
- Environment managament.
- Make api endpoint configurable depending on env.
- Show corresponding props to update user screen in order to show the actual values on form.
- Make content in table responsive.
- Redirection from create user and update user to home route.
