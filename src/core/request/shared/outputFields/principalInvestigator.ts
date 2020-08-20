import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the PrincipalInvestigator class.
 * @type
 */
export type PrincipalInvestigatorField =
  | "email"
  | "firstName"
  | "lastName"
  | "middleInitial"
  | "name"
  | "phone";

/**
 * Represents a principal investigator, the individual leading
 * research funded through an award.
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class PrincipalInvestigator {
  /**
   * Constructs an instance of PrincipalInvestigator
   * @constructor
   * @param {Array<PrincipalInvestigatorField>} init An array of Fields to return from the response
   */
  constructor(...init: Array<PrincipalInvestigatorField>) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _email: { enumerable: false },
      _firstName: { enumerable: false },
      _lastName: { enumerable: false },
      _middleInitial: { enumerable: false },
      _name: { enumerable: false },
      _phone: { enumerable: false },
    });

    Object.seal(this);
  }

  private _email: Parameter<boolean> = new Parameter<boolean>({
    prefix: "piEmail",
    value: false,
  });
  private _firstName: Parameter<boolean> = new Parameter<boolean>({
    prefix: "piFirstName",
    value: false,
  });
  private _lastName: Parameter<boolean> = new Parameter<boolean>({
    prefix: "piLastName",
    value: false,
  });
  private _middleInitial: Parameter<boolean> = new Parameter<boolean>({
    prefix: "piMiddleInitial",
    value: false,
  });
  private _name: Parameter<boolean> = new Parameter<boolean>({
    prefix: "pdPIName",
    value: false,
  });
  private _phone: Parameter<boolean> = new Parameter<boolean>({
    prefix: "piPhone",
    value: false,
  });

  /**
   * Indicates whether the email address of the principal investigator
   * should be returned from the request.
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
   * Indicates whether the first name of the principal investigator
   * should be returned from the request.
   * @access public
   * @type {boolean}
   */
  public get firstName(): boolean {
    return this._firstName.value;
  }
  public set firstName(value: boolean) {
    this._firstName.value = value;
  }

  /**
   * Indicates whether the last name of the principal investigator
   * should be returned from the request.
   * @access public
   * @type {boolean}
   */
  public get lastName(): boolean {
    return this._lastName.value;
  }
  public set lastName(value: boolean) {
    this._middleInitial.value = value;
  }

  /**
   * Indicates whether the middle initial of the principal investigator
   * should be returned from the request.
   * @access public
   * @type {boolean}
   */
  public get middleInitial(): boolean {
    return this._middleInitial.value;
  }
  public set middleInitial(value: boolean) {
    this._middleInitial.value = value;
  }

  /**
   * Indicates whether the full name of the principal investigator
   * should be returned from the request.
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
   * Indicates whether the phone number of the principal investigator
   * should be returned from the request.
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
      this._firstName,
      this._lastName,
      this._middleInitial,
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
    Object.assign(this, new PrincipalInvestigator());
  }
}
