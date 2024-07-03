export const invalidFieldException = (message: string): Error => {
    return new Error(message);
}