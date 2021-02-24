import Openpay from 'openpay';
import { Request } from 'express';
import  Util from 'util';


class CustomerService {
    private static instance: CustomerService;
    private openPay: Openpay;

    private constructor() {
        this.openPay = new Openpay("your_id", "private_key", false);
        console.log("openPay created" + this.openPay);
    }

    public static getInstance(): CustomerService {
        if(!CustomerService.instance){
            CustomerService.instance = new CustomerService();
        }
        return CustomerService.instance;
    }

    public async getCustomers(): Promise<any>{
        const customersList =Util.promisify(this.openPay.customers.list);
        let data = "";
        const result = await customersList(data)
        .then(list => {
            return list;
        }).catch(error => {
            return error;
        }); 
        return result;
    }

    public async createCustomer(request: Request): Promise<any>{
        //validates entries.
        let data = {
            'name': 'customer name',
            'email': 'customer_email@me.com',
            'requires_account': false 
            };
        const customer= Util.promisify(this.openPay.customers.create);
        return await customer(data).then(body => {
            return body;
        }).catch(error => {
            return error;
        }) 
    }
}

export default CustomerService;