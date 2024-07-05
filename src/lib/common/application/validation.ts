import { ValidationFunction, Validations } from "../domain/validation";

export const validationFunction = <T>(
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
    return newErrors;
  };