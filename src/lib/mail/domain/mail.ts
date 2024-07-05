export interface Email {
    fromName: string,
    fromEmail: string,
    subject: string,
}

export interface EmailSender {
    send(email: Email): Promise<Email>
}

export interface SendEmail {
    send: (email: Email) => Promise<Email>
}