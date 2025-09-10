import express from 'express';
import { createContact, deleteContact, delteAllContacts, getContact, getContacts, updateContact } from '../controllers/contactController.js';
const router = express.Router();

router.route('/').get(getContacts).post(createContact).delete(delteAllContacts);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);


export default router;
 