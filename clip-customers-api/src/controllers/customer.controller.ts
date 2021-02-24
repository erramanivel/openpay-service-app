import { Request, Response } from 'express';
import ErrorHandler from '../utils/error-handler';

import CustomerService from '../services/customer.service';



export const getCustomers = async (request: Request, response: Response): Promise<any> => {
    const customerService = CustomerService.getInstance();
    try{
        response.json(await customerService.getCustomers());
    } catch(e){
        console.error("Error trying to get customers " + e.message);
        response.status(500);
        response.json(ErrorHandler
            .getInstance().buildResponseError(500, "There was an error trying to get the customers"));
    }
}

export const createCustomer = async (request: Request, response: Response): Promise<any> => {
    const customerService = CustomerService.getInstance();
    try{
        response.json(await customerService.createCustomer(request));
    } catch(e){
        console.error("Error trying to create the customer " + e.message);
        response.status(500);
        response.json(ErrorHandler
            .getInstance().buildResponseError(500, "There was an error trying to create the customer"));
    }
}