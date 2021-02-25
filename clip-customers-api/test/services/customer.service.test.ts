import CustomerService from '../../src/services/customer.service';

const customerData = {
    'name' : 'myname',
    'email' : 'myemail@myemal.com'
};

describe('customer Service logic', () => {
    it('should get Customers and result should contains a respone', async function () {
        const custService = CustomerService.getInstance();
        expect(custService).toBeDefined;
        const result = await custService.getCustomers();
        expect(result).toBeDefined;
    });

    it('shold create a customer and return it', async function () {
        const custService = CustomerService.getInstance();
        expect(custService).toBeDefined;
        const result = await custService.createCustomer(customerData);
        expect(result).toBeDefined;
        expect(result.id).toBeDefined;
        expect(result.name).toEqual(customerData.name);
        expect(result.email).toEqual(customerData.email);
    });

    it('should return an error customer when email is invalid', async function () {
        const custService = CustomerService.getInstance();
        expect(custService).toBeDefined;
        const customerDataWrongEmail = {
            'name' : 'myname',
            'email' : 'myemail'
        };
        const result = await custService.createCustomer(customerDataWrongEmail);
        expect(result).toBeDefined;
        expect(result.http_code).toEqual(400);
        expect(result.error_code).toEqual(1001);
    });

    it('shold update a customer and return it', async function () {
        const custService = CustomerService.getInstance();
        expect(custService).toBeDefined;
        const customers = await custService.getCustomers();
        const customerDataUpdate = {
            'name' : 'mynewname',
            'email' : 'myemail@mynewemail.com',
            'id' : customers[0].id
        };
        const result = await custService.updateCustomer(customerDataUpdate);
        expect(result).toBeDefined;
        expect(result.id).toBeDefined;
        expect(result.email).toEqual(customerDataUpdate.email);
    });

    it('should return an error customer when id is invalid', async function () {
        const custService = CustomerService.getInstance();
        expect(custService).toBeDefined;
        const customerDataWrong = {
            'name' : 'myname',
            'email' : 'myemail@email.com',
            'id': 'aaaaa'
        };
        const result = await custService.updateCustomer(customerDataWrong);
        expect(result).toBeDefined;
        expect(result.http_code).toEqual(404);
        expect(result.error_code).toEqual(1005);
    });
});