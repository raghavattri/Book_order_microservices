import express from 'express';
import { getAllCustomers, getCustomerById, createCustomer, deleteCustomer } from '../controllers/customerController.js';

const router = express.Router();

router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.post('/', createCustomer);
router.delete('/:id', deleteCustomer);

export default router;
