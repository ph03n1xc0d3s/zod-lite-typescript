import { Validator, Infer } from "../type";

type Schema = Record<string, Validator<any>>;

type InferSchema<S extends Schema> = {
    [K in keyof S]: Infer<S[K]>;
}

export class ObjectValidator<S extends Schema> extends Validator<InferSchema<S>> {
    readonly _type!: InferSchema<S>;

    constructor(private schema: S) {
        super();
    }

    parse(value: unknown): InferSchema<S> {
        if(typeof value !== "object" || value === null || Array.isArray(value)) {
            throw new Error(`Expected object, but received ${typeof value}`);
        }

        const result: any = {};
        for (const [key, validator] of Object.entries(this.schema)) {
            result[key] = validator.parse((value as Record<string, unknown>)[key]);
        }
        return result;

    }
}

export const object = <S extends Schema>(schema: S) => new ObjectValidator(schema);