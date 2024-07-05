"use client";
import React, { SVGProps, useEffect, useRef } from "react";
import { GeistSans } from 'geist/font/sans';
import {
  Email,
} from "@/lib/mail/domain/mail";
import { sendEmail } from "@/lib/actions";
import { useFormState } from "react-dom";
import useFormValidation from "@/app/hooks/useFormValidation";
import { emailValidation } from "@/lib/mail/application/validation";
import { Validations } from "@/lib/common/domain/validation";
import styles from "./styles.module.css";
import SubmitButton from "./submit-button/submit-button";

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
      <h3 className={`${styles.maxWidth} ${styles.formTitle}`}>Send me a message!</h3>
      <form
        onSubmit={handleSubmit}
        ref={form}
        className={`wrapper ${styles.formContainer}`}
      >

        <div className={`${styles.inputBox} ${styles.maxWidth}`}>
          <div className={styles.inputContainer}>
            <label htmlFor="fromName" className={styles.inputLabel}>Name</label>
            <input
              type="text"
              name="fromName"
              id="fromName"
              className={`${styles.inputItem} ${
                errors.fromName && styles.borderColorError
              }`}
            />
            {errors.fromName !== "" && (
              <span className={styles.errorField}>{errors.fromName}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="fromEmail" className={styles.inputLabel}>Email</label>
            <input type="text" name="fromEmail" id="fromEmail" className={`${styles.inputItem} ${
                errors.fromEmail && styles.borderColorError
              }`}/>
            {errors.fromEmail !== "" && <span className={styles.errorField}>{errors.fromEmail}</span>}
          </div>
        </div>

        <div className={`${styles.maxWidth} ${styles.messageWrapper}`}>
        <textarea
          name="subject"
          cols={30}
          rows={10}
          className={`${styles.textAreaItem} ${styles.inputItem} ${GeistSans.className} ${
            errors.subject && styles.borderColorError
          }`}
        />
        {errors.subject !== "" && <span className={styles.errorField}>{errors.subject}</span>}
        <div className={styles.buttonWrapper}>
        <SubmitButton />
        </div>
        </div>

      </form>
    </section>
  );
};

export default ContactForm;
