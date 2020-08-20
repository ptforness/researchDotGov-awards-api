import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the Agency class.
 * @type
 */
export type AgencyField = "name";

/**
 * Represents an Agency, which grants Awards to Awardees
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class Agency {
  /**
   * Constructs an instance of Agency
   * @constructor
   * @param {Array<AgencyField>} init An array of Fields to return from the response
   */
  constructor(...init: AgencyField[]) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _name: { enumerable: false },
    });

    Object.seal(this);
  }

  private _name: Parameter<boolean> = new Parameter<boolean>({
    prefix: "agency",
    value: false,
  });

  /**
   * Indicates whether the agency name should be included in the
   * response
   * @access public
   * @type {boolean}
   */
  public get name(): boolean {
    return this._name.value;
  }
  public set name(value: boolean) {
    this._name.value = value;
  }

  /**
   * Outputs a list of response fields to be included in the request
   * @access public
   * @returns {string[]} List of response fields to be included in the request
   */
  public build(): string[] {
    const outputFields: Parameter<boolean>[] = [this._name];

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
    Object.assign(this, new Agency());
  }
}
