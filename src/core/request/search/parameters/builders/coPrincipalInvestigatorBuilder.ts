import { Parameter } from "../../../shared/parameter";
import { CoPrincipalInvestigator } from "../types/coPrincipalInvestigator";

/**
 * Represents a CoPrincipalInvestigator, who assists a PrincipalInvestigator in grant research
 * @class
 * @category Request
 * @subcategory SearchConfig
 */
export class CoPrincipalInvestigatorBuilder implements CoPrincipalInvestigator {
  /**
   * Constructs an instance of CoPrincipalInvestigator
   * @constructor
   * @param {CoPrincipalInvestigator} init An instance of
   */
  constructor(init?: CoPrincipalInvestigator) {
    Object.assign(this, init);
  }

  private _name: Parameter<string> = new Parameter<string>({
    prefix: "coPDPI",
  });

  /**
   * Returns the CoPrincipalInvestigator, used to filter results
   * @access public
   * @property name
   * @type {string}
   */
  public get name(): string {
    return this._name.value;
  }
  public set name(value: string) {
    this._name.value = value;
  }

  /**
   * Generates an array containing string representations of each parameter
   * @access public
   * @returns {string[]} An array containing string representations of each parameter
   */
  public build(): string[] {
    return [this._name.toString()].filter(
      (parameter) => parameter != undefined
    );
  }

  /**
   * Resets all properties to default values
   * @access public
   * @returns {void} void
   */
  public reset(): void {
    Object.assign(this, new CoPrincipalInvestigatorBuilder());
  }
}
