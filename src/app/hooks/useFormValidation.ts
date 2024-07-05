import { validationFunction } from "@/lib/common/application/validation";
import {
  ValidationFunction,
  Validations,
} from "@/lib/common/domain/validation";
import { ChangeEvent, useState } from "react";

const useFormValidation = <T>(initialState: T) => {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [formData, setFormData] = useState<T>(initialState);
  const validate = validationFunction
  const validation = (
    validations: Validations<T>,
    data: T
  ) => {

    const err = validate(validations, data);
    setErrors(err);
    /*
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
    return newErrors;*/
  };

  const onChangeValidation = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    validations: Validations<T>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      validation(validations, prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return { validation, errors, setErrors, formData, onChangeValidation };
};

export default useFormValidation;
