import { Parameter } from "../../../shared/parameter";
import { ProgramOfficer } from "../types/programOfficer";

/**
 * Represents a ProgramOfficer
 * @class
 * @category Request
 * @subcategory SearchConfig
 */
export class ProgramOfficerBuilder implements ProgramOfficer {
  /**
   * Constructs an instance of ProgramOfficer
   * @constructor
   * @param {ProgramOfficer} init An instance of
   */
  constructor(init?: ProgramOfficer) {
    Object.assign(this, init);
  }

  private _name: Parameter<string> = new Parameter<string>({
    prefix: "poName",
  });

  /**
   * Returns the ProgramOfficer, used to filter results
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
    Object.assign(this, new ProgramOfficerBuilder());
  }
}
