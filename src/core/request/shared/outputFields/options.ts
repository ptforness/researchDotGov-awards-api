import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the Options class.
 * @type
 */
export type OptionsField = "limit" | "offset";

/**
 * Represents a collection of request options
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class Options {
  /**
   * Constructs an instance of Options
   * @constructor
   * @param {Array<OptionsField>} init An array of Fields to return from the response
   */
  constructor(...init: Array<OptionsField>) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _limit: { enumerable: false },
      _offset: { enumerable: false },
    });

    Object.seal(this);
  }

  private _limit: Parameter<boolean> = new Parameter<boolean>({
    prefix: "rpp",
    value: false,
  });
  private _offset: Parameter<boolean> = new Parameter<boolean>({
    prefix: "offset",
    value: false,
  });

  /**
   * Indicates whether the number of records requested
   * should be included in the response
   * @access public
   * @type {boolean}
   */
  public get limit(): boolean {
    return this._limit.value;
  }
  public set limit(value: boolean) {
    this._limit.value = value;
  }

  /**
   * Indicates whether the (one-indexed) record offset should be
   * included in the response.
   */
  public get offset(): boolean {
    return this._offset.value;
  }
  public set offset(value: boolean) {
    this._offset.value = value;
  }

  /**
   * Outputs a list of response fields to be included in the request
   * @access public
   * @returns {string[]} List of response fields to be included in the request
   */
  public build(): string[] {
    const outputFields: Parameter<boolean>[] = [this._limit, this._offset];

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
    Object.assign(this, new Options());
  }
}
