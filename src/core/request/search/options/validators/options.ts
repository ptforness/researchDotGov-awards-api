import { Validator } from "../../../../../types";

export class OptionsValidator {
  public static readonly limit: Validator = (value: number) => {
    return value >= 0 && value <= 25;
  };
  public static readonly offset: Validator = (value: number) => {
    return value >= 0;
  };
}
