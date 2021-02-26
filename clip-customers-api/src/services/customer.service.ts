import  Util from 'util';
import { OPEN_API_KEY, MERCHANT_ID } from '../config/settings';
const Openpay = require('openpay');


class CustomerService {
    private static instance: CustomerService;
    private openPay;

    private constructor() {
        this.openPay = new Openpay(MERCHANT_ID, OPEN_API_KEY, false);
        this.openPay.setTimeout(10000);
    }

    public static getInstance(): CustomerService {
        if(!CustomerService.instance){
            CustomerService.instance = new CustomerService();
        }
        return CustomerService.instance;
    }

    public async getCustomers(params: any): Promise<any>{
        let offset = 0;
        let limit = 10;
        console.log(params);
        if(params){
            offset = params.offset;
            limit = params.limit;
        }
        const customersList =Util.promisify(this.openPay.customers.list);
        let data = {
            offset: offset,
            limit: limit
        };
        const result = await customersList(data)
        .then((list: any) => {
            return list;
        }).catch((error: any) => {
            return error;
        }); 
        return result;
    }

    public async createCustomer(customerData: any): Promise<any>{
        const customer= Util.promisify(this.openPay.customers.create);
        return await customer(customerData).then((body: any) => {
            return body;
        }).catch((error: any) => {
            return error;
        }) 
    }

    public async updateCustomer(customerData: any): Promise<any>{
        const customer= Util.promisify(this.openPay.customers.update);
        return await customer(customerData.id, customerData).then(( body: any) => {
            return body;
        }).catch((error: any) => {
            return error;
        }) 
    }
}

export default CustomerService;