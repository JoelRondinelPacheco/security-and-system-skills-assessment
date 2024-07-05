import { validationFunction } from "@/lib/common/application/validation"; 
import { emailValidation } from "@/lib/mail/application/validate-email-use-case";
import { Email } from "@/lib/mail/domain/mail";

let email: Email;
const emailValidationFn = emailValidation;

beforeAll(() => {
    email = {
        fromName: "Joel",
        fromEmail: "joel@email.com",
        subject: "Message".repeat(5),
    }
  });

describe('validationFunction', () => {
    it('Should return an empty object', () => {
        const res = validationFunction(emailValidationFn, email);
        expect(res).toEqual({});
    });

    it('should return an error for an invalid fromName', () => {
        const data: Email = { ...email, fromName: "J" };
    
        const result = validationFunction(emailValidationFn, data);
        expect(result).toEqual({ fromName: "Nombre debe tener entre 2 y 100 carateres" });
      });
})