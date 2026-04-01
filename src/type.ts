export abstract class Validator <T> {
    abstract readonly _type: T;
    abstract parse(value: unknown): T;
}

export type Infer<T extends Validator<unknown>> = T extends Validator<infer U> ? U : never;