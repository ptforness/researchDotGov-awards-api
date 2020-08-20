import { Validator } from "../../../types";

export class Parameter<T> {
  public prefix: string;
  public value: T;
  public isValid: Validator = () => true;

  public constructor(init?: Partial<Parameter<T>>) {
    Object.assign(this, init);
  }

  public toString(): string {
    if (this.value == null) return undefined;

    // Tip: if (date instanceof Date) returns true for invalid dates, this doesn't
    const isDate: boolean =
      Object.prototype.toString.call(this.value) === "[object Date]";

    if (isDate) {
      // Format value to match Awards API requirements
      const date = (this.value as unknown) as Date; // Casts T as Date
      const options = {
        // Options for formatting
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      const format = new Intl.DateTimeFormat(undefined, options);

      // Destructuring array of objects into month, day, year strings
      const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year },
      ] = format.formatToParts(date);

      return `${this.prefix}=${month}/${day}/${year}`;
    }
    return `${this.prefix}=${this.value.toString()}`;
  }
}
