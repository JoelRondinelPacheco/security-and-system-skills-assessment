import { invalidFieldException } from "@/lib/common/domain/exception";

export interface Email {
    fromName: string,
    fromEmail: string,
    subject: string,
}

//todo set errors
export const ensureEmailIsValid = ({fromName, fromEmail, subject}: Email) => {
    if (!isFromNameValid(fromName)) {
        throw invalidFieldException(fromName);
    }

    if (!isFromEmailValid(fromEmail)) {
        throw invalidFieldException(fromEmail);
    }

    if (!isSubjectValid(subject)) {
        throw invalidFieldException(subject);
    }
}
//FORM_NAME_MIN_LENGHT agregar varialbes
//todo tambien resto varaibles
export const isFromNameValid = (fromName: string): boolean => {
    return fromName.length > 1 && fromName.length < 100; 
}

export const isFromEmailValid = (email: string): boolean => {
    const validRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email);
}

export const isSubjectValid = (subject: string): boolean => {
    return subject.length > 10 && subject.length < 500; 
}
