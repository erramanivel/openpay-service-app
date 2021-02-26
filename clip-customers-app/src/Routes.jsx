
import React from 'react';
import Customers from './customer/Customers';
import AddCustomer from './customer/AddCustomer';
import UpdateCustomer from './customer/UpdateCustomer';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Customers} />
                    <Route path="/create-customer" exact component={AddCustomer} />
                    <Route path="/update-customer" exact component={UpdateCustomer} />
                </Switch>
            </Router>
        )
    }
}