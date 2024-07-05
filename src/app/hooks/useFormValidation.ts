import {
  ValidationFunction,
  Validations,
} from "@/lib/common/domain/validation";
import { ChangeEvent, useState } from "react";

const useFormValidation = <T>(initialState: T) => {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [formData, setFormData] = useState<T>(initialState);

  const validate = (
    validations: Validations<T>,
    data: T
  ): Partial<Record<keyof T, string>> => {
    const newErrors: Partial<Record<keyof T, string>> = {};

    for (const [field, rule] of Object.entries(validations) as [
      keyof T,
      ValidationFunction
    ][]) {
      try {
        rule(String(data[field]));
      } catch (e: any) {
        newErrors[field] = e.message;
      }
    }
    setErrors(newErrors);
    return newErrors;
  };

  const onChangeValidation = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    validations: Validations<T>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      validate(validations, prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return { validate, errors, setErrors, formData, onChangeValidation };
};

export default useFormValidation;
