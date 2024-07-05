'use server';
import { Email } from "./mail/domain/mail";
import { validationFunction } from "./common/application/validation";
import { emailValidation } from "./mail/application/validate-email-use-case";
import { createEmailMockSender } from "./mail/infrastructure/emailMockSender";
import { sendMockEmailUseCase } from "./mail/application/send-mock-email-use-case";
import { revalidatePath } from "next/cache";


export const sendEmail = async (prevState: Partial<Record<keyof Email, string>>, email: FormData) => {
    const emailSender = createEmailMockSender();
    const sendEmailUseCase = sendMockEmailUseCase(emailSender);

    const formData: Email = {
        fromName: email.get('fromName')?.toString() || "",
        fromEmail: email.get('fromEmail')?.toString() || "",
        subject: email.get('subject')?.toString() || "",
    };
    const errors = validationFunction(emailValidation, formData);
    if (Object.keys(errors).length === 0) {
        try {
            const email = await sendEmailUseCase.send(formData);
            console.log("enviando")
            return {};
        } catch (e) {
            return { subject: "Error"}
        }
    } else {
        return errors;
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