'use server';

import { Email } from "./mail/domain/mail";

export const sendEmail = async (prevState: Email, email: FormData) => {
    const formData = {
        /*
        fromName: email.fromName,
        fromEmail: email.fromEmail,
        subject: email.subject*/
        fromName: email.get('name'),
        fromEmail: email.get('email'),
        subject: email.get('message')
    };
    console.log("recibio");

    console.log(formData);

    return Promise.resolve({
        fromName: "Error name asdasd",
        fromEmail: "Error email0",
        subject: "Error message"
    })
}