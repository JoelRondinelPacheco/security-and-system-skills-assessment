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

export function loadingIcon(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
  )
}


type FormState = {
  pending: boolean,
  error: boolean,
  success: boolean | null
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState<FormState>({
    pending: false,
    error: false,
    success: null
  })
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [state, formAction] = useFormState<
    Partial<Record<keyof Email, string>>,
    FormData
  >(sendEmail, {});
  const { validation, errors, setErrors, formData, onChangeValidation, reset } = useFormValidation<Email>(email);

  const emailValidations: Validations<Email> = emailValidation;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (form.current && !pending) {
      const err =validation(emailValidations, formData);

      if (Object.keys(err).length === 0) {
        //setFormState(prev => {...prev, pending: true, success: false})
        setFormState(prev => ({...prev, pending: true, success: false}))
        setPending(true);
        setSuccess(false);
        let formData = new FormData(form.current);
        formAction(formData);
      }
    }
  };

  const handleOnChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (success) setSuccess(false);
    if (formState.success) setFormState(prev => ({...prev, success: false})) //o null
    onChangeValidation(e, emailValidations)
  }

  useEffect(() => {
    const isOk = Object.keys(state).length === 0

    setFormState(prev => {
      let newSuccess: boolean | null = prev.success === null ? null : isOk;
      return {
      error: !isOk,
      pending: false,
      success: newSuccess
      }
    })
    setErrors(state);
/*
    console.log("cambio")
    if (isOk) {
      setSuccess(prev => {
        if (prev === null) {
          console.log("Es null")
          return null;
        } else {
        return isOk
        }
      })
      reset(email);
    }
    setError(!isOk)
    setPending(false);
    setErrors(state);*/
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
              onChange={handleOnChangeForm}
              disabled={pending}
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
              onChange={handleOnChangeForm}
              disabled={pending}
              />
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
          onChange={handleOnChangeForm}
          disabled={pending}
          />
        {errors.subject !== "" && <span className={styles.errorField}>{errors.subject}</span>}
        <div className={styles.buttonWrapper}>
        {/*<SubmitButton />*/}
        <Button disabled={pending} type="submit">
          <div className={styles.submitButton}>
            <span>{pending ? "LOADING" : "SEND"}</span>
            { !pending &&
              <span className={styles.submitIcon}>{IconoirSend()}</span>
            }
            {
              pending &&
              <span>{loadingIcon()}</span>
            }
            </div>
        </Button>
        { error &&
        <Button>
        error
        </Button>
        }
        {
           <span>{success === null ? "null success" : success === false ? "false success" : "true succ"}</span>
        }
        </div>
        </div>

      </form>
    </section>
  );
};

export default ContactForm;
