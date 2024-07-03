'use client'
import React from 'react'
import { Email } from '@/lib/mail/domain/mail'
import { sendEmail } from '@/lib/actions'
import { useFormStatus, useFormState } from 'react-dom'
export type res = {
    name: string,
    email: string,
    message: string
}
const initialState: res = {
    name: "",
    email: "",
    message: ""
}

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

const ContactForm = () => {

    const [state, formAction] = useFormState(sendEmail, initialState);


  return (
    <section>
        {state.message !== "" && state.message }
        <form action={formAction}>
            <input type="text" name='name' />
            {
                state.name !== "" && <span>{state.name}</span>
            }
            <input type="text" name='email' />
            {
                state.email !== "" && <span>{state.email}</span>
            }
            <input type="text" name='message' />
            {
                state.message !== "" && <span>{state.message}</span>
            }
            {
                SubmitButton()    
            }
        </form>
    </section>
  )
}

export default ContactForm