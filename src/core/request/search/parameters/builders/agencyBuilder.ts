import { Parameter } from "../../../shared/parameter";
import { Agency, Name } from "../types/agency";

/**
 * Represents an Agency, which grants Awards to Awardees
 * @class
 * @category Request
 * @subcategory SearchConfig
 */
export class AgencyBuilder implements Agency {
  /**
   * Constructs an instance of Agency
   * @constructor
   * @param {Agency} init An instance of
   */
  constructor(init?: Agency) {
    Object.assign(this, init);
  }

  private _name: Parameter<Name> = new Parameter<Name>({
    prefix: "agency",
    value: "NSF",
  });

  /**
   * Returns the Agency used to filter results
   * @access public
   * @property name
   * @type {Name}
   */
  public get name(): Name {
    return this._name.value;
  }
  public set name(value: Name) {
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
    Object.assign(this, new AgencyBuilder());
  }
}
