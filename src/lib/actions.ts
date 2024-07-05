'use server';
import { Email } from "./mail/domain/mail";
import { validationFunction } from "./common/application/validation";
import { emailValidation } from "./mail/application/validation";

export const sendEmail = async (prevState: Partial<Record<keyof Email, string>>, email: FormData) => {
    console.log("Recibio")
    console.log(email)
    const formData: Email = {
        /*
        fromName: email.fromName,
        fromEmail: email.fromEmail,
        subject: email.subject*/
        fromName: email.get('fromName')?.toString() || "",
        fromEmail: email.get('fromEmail')?.toString() || "",
        subject: email.get('subject')?.toString() || "",
    };
    console.log(formData)
    const errors = validationFunction(emailValidation, formData);
    console.log(errors)
    if (Object.keys(errors).length === 0) {
        console.log("Email ok")
        console.log(formData)
        console.log(errors)
        return Promise.resolve(formData);
        //todo send email
    } else {
        return Promise.resolve(errors);
    }
    /*
    console.log("recibio");

    console.log(formData);

    return Promise.resolve({
        fromName: "Error name asdasd",
        fromEmail: "Error email0",
        subject: "Error message"
    })*/
}