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
import { emailValidation } from "@/lib/mail/application/validate-email-use-case";
import { errorIcon, loadingIcon, sendIcon, successIcon } from "./icons";
import Button from "@/app/components/button/button";

const email: Email = {
  fromName: "",
  fromEmail: "",
  subject: "",
};



type FormState = {
  pending: boolean,
  error: boolean,
  success: boolean | null,
  tried: boolean,
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState<FormState>({
    pending: false,
    error: false,
    success: null,
    tried: false,
  })
  const [state, formAction] = useFormState<
    Partial<Record<keyof Email, string>>,
    FormData
  >(sendEmail, {});
  const { validation, errors, setErrors, formData, onChangeValidation, reset } = useFormValidation<Email>(email);

  const emailValidations: Validations<Email> = emailValidation;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (form.current && !formState.pending) {
      const err =validation(emailValidations, formData);
      setErrors(err);
      setFormState(prev => ({...prev, tried: true, success: false, error: false}))

      if (Object.keys(err).length === 0) {
        setFormState(prev => ({...prev, pending: true, success: false}))
        let formData = new FormData(form.current);
        formAction(formData);
      }
    }
  };

  const handleOnChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formState.success) setFormState(prev => ({...prev, success: false}))
    if (formState.error) setFormState(prev => ({...prev, error: false}))
    onChangeValidation(e, emailValidations)
  }

  useEffect(() => {
    const isOk = Object.keys(state).length === 0

    setFormState(prev => {
      let newSuccess: boolean | null = prev.success === null ? null : isOk;
      return {
      error: !isOk,
      pending: false,
      success: newSuccess,
      tried: false
      }
    })
    setErrors(state);
    if (isOk) {
      reset(email);
    } 
  }, [state]);

  return (
    <section className={`container ${styles.container}`}>
      <div className={`wrapper ${styles.titleWrapper}`}>
      <h3 className={`${styles.maxWidth} ${styles.formTitle}`}>Send me a message!</h3>
      </div>
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
                (errors.fromName && formState.tried) && styles.borderColorError
              }`}
              value={formData.fromName}
              onChange={handleOnChangeForm}
              disabled={formState.pending}
            />
            {(errors.fromName !== "" && formState.tried) && (
              <span className={styles.errorField}>{errors.fromName}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="fromEmail" className={styles.inputLabel}>Email</label>
            <input type="text" name="fromEmail" id="fromEmail" className={`${styles.inputItem} ${
                (errors.fromEmail && formState.tried) && styles.borderColorError
              }`}
              value={formData.fromEmail}
              onChange={handleOnChangeForm}
              disabled={formState.pending}
              />
            {(errors.fromEmail !== "" && formState.tried) && <span className={styles.errorField}>{errors.fromEmail}</span>}
          </div>
        </div>

        <div className={`${styles.maxWidth} ${styles.messageWrapper}`}>
        <textarea
          name="subject"
          cols={30}
          rows={10}
          className={`${styles.textAreaItem} ${styles.inputItem} ${GeistSans.className} ${
            (errors.subject && formState.tried) && styles.borderColorError
          }`}
          onChange={handleOnChangeForm}
          disabled={formState.pending}
          value={formData.subject}
          />
        {
        (errors.subject !== "" && formState.tried) && <span className={styles.errorField}>{errors.subject}</span>
        }
        {(formState.error) && <span className={`${styles.errorField} ${styles.errorFromService}`}>{state.subject}</span>}

        <div className={`${styles.buttonWrapper}`}>
        <Button
        disabled={formState.pending}
        type="submit"
        variant={formState.error ? "destructive" : formState.success ? "success" : formState.pending ? "default" : "default"}
        >
          {
            formState.pending
              ? <div><span>LOADING</span><span className={styles.loadingIcon}>{loadingIcon()}</span></div>
              : formState.error ? <div><span>ERROR</span><span className={styles.errorIcon}>{errorIcon()}</span></div>
              : formState.success ? <div><span>MAIL SENDED</span><span className={styles.successIcon}>{successIcon()}</span></div>
              :  <div><span>SEND</span><span className={styles.submitIcon}>{sendIcon()}</span></div>

          }         
        </Button>
        </div>    
        </div>

      </form>
    </section>
  );
};

export default ContactForm;
