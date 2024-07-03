export type ValidationFunction = (value: string) => void

export type Validations<T> = {
    [K in keyof T]: ValidationFunction;
}