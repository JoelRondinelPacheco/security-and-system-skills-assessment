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
    return err;
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

  const reset = (initialState: T) => {
    setFormData(initialState)
  }

  return { validation, errors, setErrors, formData, onChangeValidation, reset };
};

export default useFormValidation;
