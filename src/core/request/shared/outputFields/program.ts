import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the Program class.
 * @type
 */
export type ProgramField = "awardCode" | "fundingCode";

/**
 * Represents a Program, which is run by an Agency
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class Program {
  /**
   * Constructs an instance of Program
   * @constructor
   * @param {Array<ProgramField>} init An array of Fields to return from the response
   */
  constructor(...init: Array<ProgramField>) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _awardCode: { enumerable: false },
      _fundingCode: { enumerable: false },
    });

    Object.seal(this);
  }

  private _awardCode: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardAgencyCode",
    value: false,
  });
  private _fundingCode: Parameter<boolean> = new Parameter<boolean>({
    prefix: "fundAgencyCode",
    value: false,
  });

  /**
   * Indicates whether the award code should be included in the
   * response
   * @access public
   * @type {boolean}
   */
  public get awardCode(): boolean {
    return this._awardCode.value;
  }
  public set awardCode(value: boolean) {
    this._awardCode.value = value;
  }

  /**
   * Indicates whether the fund agency code should be included in
   * the response
   * @access public
   * @type {boolean}
   */
  public get fundingCode(): boolean {
    return this._fundingCode.value;
  }
  public set fundingCode(value: boolean) {
    this._fundingCode.value = value;
  }

  /**
   * Outputs a list of response fields to be included in the request
   * @access public
   * @returns {string[]} List of response fields to be included in the request
   */
  public build(): string[] {
    const outputFields: Parameter<boolean>[] = [
      this._awardCode,
      this._fundingCode,
    ];

    const enabledFields: string[] = [];
    for (const field of outputFields) {
      if (field.value === true) enabledFields.push(field.prefix);
    }

    return enabledFields;
  }

  /**
   * Resets all properties to default values
   * @access public
   * @returns {void} void
   */
  public reset(): void {
    Object.assign(this, new Program());
  }
}
