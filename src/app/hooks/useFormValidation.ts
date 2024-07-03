import { ValidationFunction, Validations } from "@/lib/common/domain/validation";
import { useState } from "react";

const useFormValidation = <T>() => {
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

    const validate = (validations: Validations<T>, data: T): Partial<Record<keyof T, string>> => {

        const newErrors: Partial<Record<keyof T, string>> = {};
        
        for (const [field, rule] of Object.entries(validations) as [keyof T, ValidationFunction][]) {
          try {
            rule(String(data[field]))
          } catch (e: any){
            newErrors[field] = e.message
          }
        }
        setErrors(newErrors);
        return newErrors;
      };

    return { validate, errors, setErrors };
}

export default useFormValidation;