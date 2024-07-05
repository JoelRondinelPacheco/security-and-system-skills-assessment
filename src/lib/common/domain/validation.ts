export type ValidationFunction = (value: string) => void | never

export type Validations<T> = {
    [K in keyof T]: ValidationFunction;
}