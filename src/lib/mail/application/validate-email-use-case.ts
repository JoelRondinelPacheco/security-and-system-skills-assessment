import { EmailValidation, ensureIsFromEmailValid, ensureIsFromNameValid, ensureIsSubjectValid } from "../domain/validations";

export const emailValidation: EmailValidation = {
    fromName: ensureIsFromNameValid,
    fromEmail: ensureIsFromEmailValid,
    subject: ensureIsSubjectValid,
}