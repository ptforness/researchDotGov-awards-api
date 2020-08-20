import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the CoPrincipalInvestigator class.
 * @type
 */
export type CoPrincipalInvestigatorField = "name";

/**
 * Represents a co-principal investigator, an individual who aides the
 * principal investigator in research funded by an award
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class CoPrincipalInvestigator {
  /**
   * Constructs an instance of CoPrincipalInvestigator
   * @constructor
   * @param {Array<CoPrincipalInvestigatorField>} init An array of Fields to return from the response
   */
  constructor(...init: Array<CoPrincipalInvestigatorField>) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _name: { enumerable: false },
    });

    Object.seal(this);
  }

  private _name: Parameter<boolean> = new Parameter<boolean>({
    prefix: "coPDPI",
    value: false,
  });

  /**
   * Indicates whether the name of the co-principal investigator
   * should be included in the response
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
    Object.assign(this, new CoPrincipalInvestigator());
  }
}
