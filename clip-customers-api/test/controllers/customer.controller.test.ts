import { server } from '../../src/server';
import { agent as request } from 'supertest';

const customerData = {
    'name' : 'myname',
    'email' : 'myemail@myemal.com'
};

describe ('customer controller', () => {
    it('Should return getCustomer list', async () => {
        const response = await request(server).get('/api/v1/customers');
        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined;
    });

    it('Should return a customer created', async () => {
        const response = await request(server)
        .post('/api/v1/customers')
        .set('Content-Type', 'application/json')
        .send(customerData);
        expect(response.status).toEqual(201);
        expect(response.body).toBeDefined;
    });

    it('Should return error for bad parameters', async () => {
        const customerDataWrongEmail = {
            'name' : 'myname',
            'email' : 'myemail'
        }; 
        const response = await request(server)
        .post('/api/v1/customers')
        .set('Content-Type', 'application/json')
        .send(customerDataWrongEmail);
        expect(response.status).toEqual(400);
        expect(response.body).toBeDefined;
    });

    it('Should return a customer updated', async () => {
        const response = await request(server)
        .put('/api/v1/customers/idNotExisted')
        .set('Content-Type', 'application/json')
        .send(customerData);
        expect(response.status).toEqual(404);
        expect(response.body).toBeDefined;
    });
});