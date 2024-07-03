"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Email,
  ensureIsFromEmailValid,
  ensureIsFromNameValid,
  ensureIsSubjectValid,
} from "@/lib/mail/domain/mail";
import { sendEmail } from "@/lib/actions";
import { useFormStatus, useFormState } from "react-dom";
import useFormValidation from "@/app/hooks/useFormValidation";
import { emailValidation } from "@/lib/mail/application/validation";
import { Validations } from "@/lib/common/domain/validation";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading" : "Send email"}
    </button>
  );
};

const email: Email = {
  fromName: "",
  fromEmail: "",
  subject: "",
};

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useFormState<Partial<Record<keyof Email, string>>, FormData>(sendEmail, email);
  const { validate, errors, setErrors } = useFormValidation<Email>();

  const emailValidations: Validations<Email> = emailValidation;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (form.current) {
        //validate form structure
        let f = new FormData(form.current);
        let data: Email = {
            fromEmail: f.get("fromEmail")?.toString() || "",
            fromName: f.get("fromName")?.toString() || "",
            subject: f.get("subject")?.toString() || ""
        }

        validate(emailValidations, data);

        if (Object.keys(errors).length === 0) {
            formAction(f)
        }
  };
}

 useEffect(() => {
    setErrors(state);
 }, [state])

  return (
    <section>
      <form onSubmit={handleSubmit} ref={form}>
        <input type="text" name="fromName" />
        {errors.fromName !== "" && <span>{errors.fromName}</span>}
        <input type="text" name="fromEmail" />
        {errors.fromEmail !== "" && <span>{errors.fromEmail}</span>}
        <input type="text" name="subject" />
        {errors.subject !== "" && <span>{errors.subject}</span>}
        {SubmitButton()}
      </form>
    </section>
  );
};

export default ContactForm;
