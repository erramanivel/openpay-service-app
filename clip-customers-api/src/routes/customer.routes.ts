import { Router } from 'express';
import { getCustomers, createCustomer } from '../controllers/customer.controller';

const router = Router();

router.route('/v1/customers').get(getCustomers);
router.route('v1/customers').post(createCustomer);

export default router;