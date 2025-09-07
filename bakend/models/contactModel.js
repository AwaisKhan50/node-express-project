import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide name"],
        },
        email: {
            type: String,
            required: [true, "Please provide email"],
        },
        phone: {
            type: String,
            required: [true, "Please provide phone number"],
        }
    },
    { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);