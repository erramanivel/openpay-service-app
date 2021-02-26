import { Request, Response } from 'express';
import ErrorHandler from '../utils/error-handler';

import CustomerService from '../services/customer.service';



export const getCustomers = async (request: Request, response: Response): Promise<any> => {
    const customerService = CustomerService.getInstance();
    try {
        console.log(request);
        response.json(await customerService.getCustomers(request.query));
    } catch (e) {
        console.error("Error trying to get customers " + e.message);
        response.status(500);
        response.json(ErrorHandler
            .getInstance().buildResponseError(500, "There was an error trying to get the customers"));
    }
}

export const createCustomer = async (request: Request, response: Response): Promise<any> => {
    const customerService = CustomerService.getInstance();
    try {
        //validates entries.
        const name = request.body.name;
        const email = request.body.email;
        if (!name || !email) {
            response.status(400);
            response.json(
                ErrorHandler
                    .getInstance().buildResponseError(400
                        , "Invalid request on payload, validate entries."));
        }
        let customerData = {
            'name': request.body.name,
            'email': request.body.email
        };
        await customerService.createCustomer(customerData).then(result => {
            if (result.error_code) {
                response.status(result.http_code);
            } else {
                response.status(201)
            }
            response.json(result);
        });
    } catch (e) {
        console.error("Error trying to create the customer " + e.message);
        response.status(500);
        response.json(ErrorHandler
            .getInstance().buildResponseError(500, "There was an error trying to create the customer"));
    }
}
export const updateCustomer = async (request: Request, response: Response): Promise<any> => {
    const customerService = CustomerService.getInstance();
    try {
        //validates entries.
        const name = request.body.name;
        const email = request.body.email;
        const id = request.params.customerId;
        if (!name || !email) {
            response.status(400);
            response.json(
                ErrorHandler
                    .getInstance().buildResponseError(400
                        , "Invalid request on payload, validate entries."));
        }
        let customerData = {
            'name': request.body.name,
            'email': request.body.email,
            'id': id
        };
        await customerService.updateCustomer(customerData).then(result => {
            if (result.error_code) {
                response.status(result.http_code);
            } else {
                response.status(204)
            }
            response.json(result);
        });
    } catch (e) {
        console.error("Error trying to create the customer " + e.message);
        response.status(500);
        response.json(ErrorHandler
            .getInstance().buildResponseError(500, "There was an error trying to create the customer"));
    }
}