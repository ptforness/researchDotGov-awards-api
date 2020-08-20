import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the Awardee class.
 * @type
 */
export type AwardeeField =
  | "address"
  | "city"
  | "country"
  | "county"
  | "district"
  | "dunsNumber"
  | "name"
  | "parentDunsNumber"
  | "state"
  | "zipCode";

/**
 * Represents the entity receiving an award (e.g. University of Arkansas)
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class Awardee {
  /**
   * Constructs an instance of Awardee
   * @constructor
   * @param {Array<AwardeeField>} init An array of Fields to return from the response
   */
  constructor(...init: Array<AwardeeField>) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _address: { enumerable: false },
      _city: { enumerable: false },
      _country: { enumerable: false },
      _county: { enumerable: false },
      _district: { enumerable: false },
      _dunsNumber: { enumerable: false },
      _name: { enumerable: false },
      _parentDunsNumber: { enumerable: false },
      _state: { enumerable: false },
      _zipCode: { enumerable: false },
    });

    Object.seal(this);
  }

  private _address: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardeeAddress",
    value: false,
  });
  private _city: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardeeCity",
    value: false,
  });
  private _country: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardeeCountryCode",
    value: false,
  });
  private _county: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardeeCounty",
    value: false,
  });
  private _district: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardeeDistrictCode",
    value: false,
  });
  private _dunsNumber: Parameter<boolean> = new Parameter<boolean>({
    prefix: "dunsNumber",
    value: false,
  });
  private _name: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardee",
    value: false,
  });
  private _parentDunsNumber: Parameter<boolean> = new Parameter<boolean>({
    prefix: "parentDunsNumber",
    value: false,
  });
  private _state: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardeeStateCode",
    value: false,
  });
  private _zipCode: Parameter<boolean> = new Parameter<boolean>({
    prefix: "awardeeZipCode",
    value: false,
  });

  /**
   * Indicates whether the address of the awardee should be
   * included in the response
   * @access public
   * @type {boolean}
   */
  public get address(): boolean {
    return this._address.value;
  }
  public set address(value: boolean) {
    this._address.value = value;
  }

  /**
   * Indicates whether the city where the awardee is based should
   * be included in the response
   * @access public
   * @type {boolean}
   */
  public get city(): boolean {
    return this._city.value;
  }
  public set city(value: boolean) {
    this._city.value = value;
  }

  /**
   * Indicates whether the country where the awardee is based should
   * be included in the response
   * @access public
   * @type {boolean}
   */
  public get country(): boolean {
    return this._country.value;
  }
  public set country(value: boolean) {
    this._country.value = value;
  }

  /**
   * Indicates whether the county where the awardee is based should
   * be included in the response
   * @access public
   * @type {boolean}
   */
  public get county(): boolean {
    return this._county.value;
  }
  public set county(value: boolean) {
    this._county.value = value;
  }

  /**
   * Indicates whether the congressional district where the awardee
   * is based should be included in the response
   * @access public
   * @type {boolean}
   */
  public get district(): boolean {
    return this._district.value;
  }
  public set district(value: boolean) {
    this._district.value = value;
  }

  /**
   * Indicates whether the DUNS number of the awardee should be
   * included in the response
   * @access public
   * @type {boolean}
   */
  public get dunsNumber(): boolean {
    return this._dunsNumber.value;
  }
  public set dunsNumber(value: boolean) {
    this._dunsNumber.value = value;
  }

  /**
   * Indicates whether the name of the awardee should be included
   * in the response
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
   * Indicates whether the DUNS number of the parent organization
   * should be included in the response
   * @access public
   * @type {boolean}
   */
  public get parentDunsNumber(): boolean {
    return this._parentDunsNumber.value;
  }
  public set parentDunsNumber(value: boolean) {
    this._parentDunsNumber.value = value;
  }

  /**
   * Indicates whether the state where the awardee is based
   * should be included in the response
   * @access public
   * @type {boolean}
   */
  public get state(): boolean {
    return this._state.value;
  }
  public set state(value: boolean) {
    this._state.value = value;
  }

  /**
   * Indicates whether the awardee zip code should be included
   * in the response
   * @access public
   * @type {boolean}
   */
  public get zipCode(): boolean {
    return this._zipCode.value;
  }
  public set zipCode(value: boolean) {
    this._zipCode.value = value;
  }

  /**
   * Outputs a list of response fields to be included in the request
   * @access public
   * @returns {string[]} List of response fields to be included in the request
   */
  public build(): string[] {
    const outputFields: Parameter<boolean>[] = [
      this._address,
      this._city,
      this._country,
      this._county,
      this._district,
      this._dunsNumber,
      this._name,
      this._parentDunsNumber,
      this._state,
      this._zipCode,
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
    Object.assign(this, new Awardee());
  }
}
