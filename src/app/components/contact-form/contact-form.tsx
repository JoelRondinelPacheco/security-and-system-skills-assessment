"use client";
import React, { SVGProps, useEffect, useRef, useState } from "react";
import { GeistSans } from 'geist/font/sans';
import {
  Email,
} from "@/lib/mail/domain/mail";
import { sendEmail } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import useFormValidation from "@/app/hooks/useFormValidation";
import { Validations } from "@/lib/common/domain/validation";
import styles from "./styles.module.css";
//import SubmitButton from "./submit-button/submit-button";
import { emailValidation } from "@/lib/mail/application/validate-email-use-case";
import Button from "../button/button";

const email: Email = {
  fromName: "",
  fromEmail: "",
  subject: "",
};

export function IconoirSend(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M.292 1.665L24.002 12L.293 22.336L3.94 12zM5.708 13l-2 5.665L18.999 12L3.708 5.336l2 5.664H11v2z"/></svg>
  )
}

const SubmitButton = () => {

  const { pending } = useFormStatus();
useEffect(() => {
  console.log("Is pending: "+ pending)
}, [pending])

  return (
    <div className={styles.container}>
      <p>{pending ? "Loading" : "SEND"}</p>
    <Button disabled={pending} type="submit">
      <div className={styles.wrapper}><span>{pending ? "Loading" : "SEND"}</span><span className={styles.icon}>{IconoirSend()}</span></div>
    </Button>
    </div>
  )
}



const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [pending, setPending] = useState(false);
  const [state, formAction] = useFormState<
    Partial<Record<keyof Email, string>>,
    FormData
  >(sendEmail, email);
  const { validation, errors, setErrors, formData, onChangeValidation } = useFormValidation<Email>(email);

  const emailValidations: Validations<Email> = emailValidation;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    if (form.current) {
      //validate form structure
      validation(emailValidations, formData);

      if (Object.keys(errors).length === 0) {
        let formData = new FormData(form.current);
        formAction(formData);
      }
    }
  };

  useEffect(() => {
    setPending(false)
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
              onChange={(e) =>onChangeValidation(e, emailValidations)}
            />
            {errors.fromName !== "" && (
              <span className={styles.errorField}>{errors.fromName}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="fromEmail" className={styles.inputLabel}>Email</label>
            <input type="text" name="fromEmail" id="fromEmail" className={`${styles.inputItem} ${
                errors.fromEmail && styles.borderColorError
              }`}
              onChange={(e) =>onChangeValidation(e, emailValidations)}              />
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
          onChange={(e) =>onChangeValidation(e, emailValidations)}        />
        {errors.subject !== "" && <span className={styles.errorField}>{errors.subject}</span>}
        <div className={styles.buttonWrapper}>
        {/*<SubmitButton />*/}
        <Button disabled={pending} type="submit">
        <div className={styles.submitButton}><span>{pending ? "Loading" : "SEND"}</span><span className={styles.submitIcon}>{IconoirSend()}</span></div>
        </Button>
        </div>
        </div>

      </form>
    </section>
  );
};

export default ContactForm;
