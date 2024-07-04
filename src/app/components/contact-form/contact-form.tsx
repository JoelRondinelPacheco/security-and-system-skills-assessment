"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Email,
} from "@/lib/mail/domain/mail";
import { sendEmail } from "@/lib/actions";
import { useFormStatus, useFormState } from "react-dom";
import useFormValidation from "@/app/hooks/useFormValidation";
import { emailValidation } from "@/lib/mail/application/validation";
import { Validations } from "@/lib/common/domain/validation";
import styles from "./styles.module.css";
import Button from "../button/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? "Loading" : "Send email"}
    </Button>
  );
};

const email: Email = {
  fromName: "",
  fromEmail: "",
  subject: "",
};

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useFormState<
    Partial<Record<keyof Email, string>>,
    FormData
  >(sendEmail, email);
  const { validate, errors, setErrors } = useFormValidation<Email>();

  const emailValidations: Validations<Email> = emailValidation;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      //validate form structure
      let formData = new FormData(form.current);
      let data: Email = {
        fromEmail: formData.get("fromEmail")?.toString() || "",
        fromName: formData.get("fromName")?.toString() || "",
        subject: formData.get("subject")?.toString() || "",
      };

      validate(emailValidations, data);

      if (Object.keys(errors).length === 0) {
        formAction(formData);
      }
    }
  };

  useEffect(() => {
    setErrors(state);
  }, [state]);

  return (
    <section className={`container ${styles.container}`}>
      <form
        onSubmit={handleSubmit}
        ref={form}
        className={`wrapper ${styles.formContainer}`}
      >
        <div className={styles.inputBox}>
          <div className={styles.inputContainer}>
            <label htmlFor="fromName" className={styles.inputLabel}>Name</label>
            <input
              type="text"
              name="fromName"
              id="fromName"
              className={`${styles.inputItem} ${
                errors.fromName && styles.borderColorError
              }`}
              placeholder="input name"
            />
            {errors.fromName !== "" && (
              <span className={styles.errorField}>{errors.fromName}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="fromEmail">Email</label>
            <input type="text" name="fromEmail" id="fromEmail" />
            {errors.fromEmail !== "" && <span>{errors.fromEmail}</span>}
          </div>
        </div>
        <textarea
          name="subject"
          cols={30}
          rows={10}
          className={styles.textAreaItem}
        />
        {errors.subject !== "" && <span>{errors.subject}</span>}
        {SubmitButton()}
      </form>
    </section>
  );
};

export default ContactForm;
