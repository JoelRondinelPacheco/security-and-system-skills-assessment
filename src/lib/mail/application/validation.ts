import { Validations } from "@/lib/common/domain/validation";
import { Email, ensureIsFromEmailValid, ensureIsFromNameValid, ensureIsSubjectValid, isFromEmailValid, isFromNameValid } from "../domain/mail";

export const emailValidation: Validations<Email> = {
    fromName: ensureIsFromNameValid,
    fromEmail: ensureIsFromEmailValid,
    subject: ensureIsSubjectValid,
}