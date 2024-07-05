import { Email, EmailSender, SendEmail } from "../domain/mail";

export const sendMockEmailUseCase = (emailSend: EmailSender): SendEmail => {
    return {
        send: (email: Email) => {
        return emailSend.send(email);
        }
    }
}