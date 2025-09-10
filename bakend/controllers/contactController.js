import asyncHandler from 'express-async-handler';
import { Contact } from '../models/contactModel.js';

//@desc Get all contacts
//@route GET /api/contact
export const getContacts = asyncHandler(async(req, res) => {
    // i want to fetch all contacts from database
    const contacts =await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create a contact
//@route POST /api/contact
export const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const newContact = await Contact.create({ name, email, phone });
    res.status(201).json(newContact);
});

//@desc Get a contact by ID
//@route GET /api/contact/:id
export const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Not found");
    }
    res.status(200).json(contact);
});

//@desc Update a contact
//@route PUT /api/contact/:id
export const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

//@desc Delete a contact
//@route DELETE /api/contact/:id
export const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await contact.deleteOne();
    res.status(200).json({ message: "Contact deleted", contact });
});

//@desc Delete all contacts
//@route DELETE /api/contact
export const delteAllContacts = asyncHandler(async (req, res) => {
    await Contact.deleteMany();
    res.status(200).json({ message: "All contacts deleted" });
});