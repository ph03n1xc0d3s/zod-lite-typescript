import { Validator } from "../type";

export class StringValidator extends Validator<string> {
    readonly _type!: string;

    parse(value: unknown): string {
        if(typeof value !== "string") {
            throw new Error(`Expected string, but received ${typeof value}`);
        }
        return value;
    }
}

export const string = new StringValidator();