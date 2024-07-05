import { Email, EmailSender } from "../domain/mail";

export const createEmailMockSender = (): EmailSender => {
    return {
        send: (email) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                  console.log(`Sending email: ${email}`);
            
                  resolve(email);
                }, 2000); // Replace with desired delay in milliseconds
              });
        }
    }
}