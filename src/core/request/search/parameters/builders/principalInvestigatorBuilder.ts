import { Parameter } from "../../../shared/parameter";
import { PrincipalInvestigator } from "../types/principalInvestigator";

/**
 * Represents a PrincipalInvestigator, who leads grant research
 * @class
 * @category Request
 * @subcategory SearchConfig
 */
export class PrincipalInvestigatorBuilder implements PrincipalInvestigator {
  /**
   * Constructs an instance of PrincipalInvestigatorBuilder
   * @constructor
   * @param {PrincipalInvestigator} init An instance of PrincipalInvestigator
   */
  constructor(init?: PrincipalInvestigator) {
    Object.assign(this, init);
  }

  private _name: Parameter<string> = new Parameter<string>({
    prefix: "pdPIName",
  });

  /**
   * Returns the PrincipalInvestigator, used to filter results
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
    Object.assign(this, new PrincipalInvestigatorBuilder());
  }
}
