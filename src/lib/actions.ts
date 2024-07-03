'use server';

import { res } from "@/app/components/contact-form/contact-form";
import { Email } from "./mail/domain/mail";

export const sendEmail = async (prevState: res, email: FormData) => {
    const formData = {
        /*
        fromName: email.fromName,
        fromEmail: email.fromEmail,
        subject: email.subject*/
        fromName: email.get('name'),
        fromEmail: email.get('email'),
        subject: email.get('message')
    };

    console.log(formData);

    return Promise.resolve({
        name: "Error name asdasd",
        email: "Error email0",
        message: "Error message"
    })
}