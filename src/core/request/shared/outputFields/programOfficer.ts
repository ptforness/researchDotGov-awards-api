import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the ProgramOfficer class.
 * @type
 */
export type ProgramOfficerField = "email" | "name" | "phone";

/**
 * Represents a program officer, the individual who runs the program
 * which granted the award.
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class ProgramOfficer {
  /**
   * Constructs an instance of ProgramOfficer
   * @constructor
   * @param {Array<ProgramOfficerField>} init An array of Fields to return from the response
   */
  constructor(...init: Array<ProgramOfficerField>) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _email: { enumerable: false },
      _name: { enumerable: false },
      _phone: { enumerable: false },
    });

    Object.seal(this);
  }

  private _email: Parameter<boolean> = new Parameter<boolean>({
    prefix: "poEmail",
    value: false,
  });
  private _name: Parameter<boolean> = new Parameter<boolean>({
    prefix: "poName",
    value: false,
  });
  private _phone: Parameter<boolean> = new Parameter<boolean>({
    prefix: "poPhone",
    value: false,
  });

  /**
   * Indicates whether the email of the program officer should be returned
   * from the request.
   * @access public
   * @type {boolean}
   */
  public get email(): boolean {
    return this._email.value;
  }
  public set email(value: boolean) {
    this._email.value = value;
  }

  /**
   * Indicates whether the name of the program officer should be returned
   * from the request.
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
   * Indicates whether the phone number of the program officer should
   * be returned from the request.
   * @access public
   * @type {boolean}
   */
  public get phone(): boolean {
    return this._phone.value;
  }
  public set phone(value: boolean) {
    this._phone.value = value;
  }

  /**
   * Outputs a list of response fields to be included in the request
   * @access public
   * @returns {string[]} List of response fields to be included in the request
   */
  public build(): string[] {
    const outputFields: Parameter<boolean>[] = [
      this._email,
      this._name,
      this._phone,
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
    Object.assign(this, new ProgramOfficer());
  }
}
