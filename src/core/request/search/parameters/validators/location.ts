import { Validator } from "../../../../../types";

export class LocationValidator {
  public static readonly congressionalDistrict: Validator = (value: string) => {
    const regex = /^[A-Za-z]{2}\d{2}$/;
    if (value == null) return true;
    return regex.test(value);
  };
  public static readonly country: Validator = (value: string) => {
    const regex = /^[A-Za-z]{2,3}$/;
    if (value == null) return true;
    return regex.test(value);
  };
  public static readonly state: Validator = (value: string) => {
    const regex = /^[A-Za-z]{2}$/;
    if (value == null) return true;
    return regex.test(value);
  };
  public static readonly zip: Validator = (value: string) => {
    const regex = /^\d{9}$/;
    if (value == null) return true;
    return regex.test(value);
  };
}
