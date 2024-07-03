import { invalidFieldException } from "@/lib/common/domain/exception";
import { ValidationFunction } from "@/lib/common/domain/validation";

export interface Email {
    fromName: string,
    fromEmail: string,
    subject: string,
}

export interface EmailValidation {
    fromName: Function,
    fromEmail: Function,
    subject: Function,
}

//todo set errors
export const ensureEmailIsValid = ({fromName, fromEmail, subject}: Email) => {
    ensureIsFromNameValid(fromName);

    ensureIsFromEmailValid(fromEmail);

    ensureIsSubjectValid(subject);
}
//FORM_NAME_MIN_LENGHT agregar varialbes
//todo tambien resto varaibles
export const isFromNameValid = (fromName: string): boolean => {
    return fromName.length > 1 && fromName.length <= 100; 
}
export const ensureIsFromNameValid: ValidationFunction = (fromName: string) => {
    if (!isFromNameValid(fromName)) {
        throw invalidFieldException("Nombre debe tener entre 2 y 100 carateres");
    }
}
export const isFromEmailValid = (email: string): boolean => {
    const validRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email);
}
export const ensureIsFromEmailValid: ValidationFunction = (email: string) => {
    if (!isFromEmailValid(email)) {
        throw invalidFieldException("Ingrese un email valido");
    }
}

export const isSubjectValid = (subject: string): boolean => {
    return subject.length >= 10 && subject.length <= 500; 
}
export const ensureIsSubjectValid: ValidationFunction = (subject: string) => {
    if (!isSubjectValid(subject)) {
        throw invalidFieldException("El mensaje debe tener entre 10 y 500 caracteres");
    }
}