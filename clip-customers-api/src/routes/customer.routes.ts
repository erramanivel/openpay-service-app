import { Router } from 'express';
import { getCustomers, createCustomer, updateCustomer } from '../controllers/customer.controller';

const router = Router();

router.route('/v1/customers').get(getCustomers);
router.route('/v1/customers').post(createCustomer);
router.route('/v1/customers/:customerId').put(updateCustomer);

export default router;