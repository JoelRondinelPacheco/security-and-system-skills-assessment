export interface Email {
    fromName: string,
    fromEmail: string,
    subject: string,
}

export const ensureEmailIsValid = ({fromName, fromEmail, subject}: Email) => {
    if (!isFromNameValid(fromName)) {
        throw error(fromName);
    }
}
//FORM_NAME_MIN_LENGHT agregar varialbes
//todo tambien resto varaibles
export const isFromNameValid = (fromName: string): boolean => {
    return fromName.length > 1 && fromName.length < 100; 
}

//todo errores, custom error ??
export function error(name: string): Error {
    return new Error('Campo name: ' + name + " is not valid" );
}
