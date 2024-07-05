import { Email, EmailSender } from "../domain/mail";

export const createEmailMockSender = (): EmailSender => {
    return {
        send: (email) => {
          const mockEmail = (email: Email) => {
            if (email.fromName.toLowerCase() === "throw") {
              throw new Error("Failed to send email")
            } else {
              return email;
            }
          }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                  try {
                    const emailRes = mockEmail(email);
                  resolve(emailRes);
                  } catch (e) {
                    reject(e)
                  }
                }, 100);
              });
        }
    }
}