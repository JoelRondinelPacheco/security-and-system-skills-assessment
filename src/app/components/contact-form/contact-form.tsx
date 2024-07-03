'use client'
import React, { useRef, useState } from 'react'
import { Email } from '@/lib/mail/domain/mail'
import { sendEmail } from '@/lib/actions'
import { useFormStatus, useFormState } from 'react-dom'


const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>

            {
                pending 
                    ? "Loading"
                    : "Send email"
            }
        </button>
    )
}

const email: Email = {
    fromName: "",
    fromEmail: "",
    subject: ""

}

const ContactForm = () => {
    const [formData, setFormData] = useState<Email>(email);
    const form = useRef<HTMLFormElement | null>(null);

    const [state, formAction] = useFormState(sendEmail, email);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
        formAction(new FormData(form.current))
        }
    }

  return (
    <section>
        <form onSubmit={handleSubmit} ref={form}>
            <input type="text" name='name' />
            {
                state.fromName !== "" && <span>{state.fromName}</span>
            }
            <input type="text" name='email' />
            {
                state.fromEmail !== "" && <span>{state.fromEmail}</span>
            }
            <input type="text" name='message' />
            {
                state.subject !== "" && <span>{state.subject}</span>
            }
            {
                SubmitButton()    
            }
        </form>
    </section>
  )
}

export default ContactForm