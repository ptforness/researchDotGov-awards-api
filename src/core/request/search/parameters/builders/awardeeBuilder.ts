import { Parameter } from "../../../shared/parameter";
import { LocationValidator } from "../validators/location";
import { Awardee } from "../types/awardee";

/**
 * Represents the entity receiving an award (e.g. University of Arkansas)
 * @class
 * @category Request
 * @subcategory SearchConfig
 */
export class AwardeeBuilder implements Awardee {
  /**
   * Constructs an instance of Awardee
   * @param {Awardee} init An instance of
   * @constructor
   */
  constructor(init?: Awardee) {
    Object.assign(this, init);
    this._country.isValid = LocationValidator.country;
    this._district.isValid = LocationValidator.congressionalDistrict;
    this._state.isValid = LocationValidator.state;
    this._zip.isValid = LocationValidator.zip;
  }

  private _city: Parameter<string> = new Parameter({ prefix: "awardeeCity" });
  private _country: Parameter<string> = new Parameter({
    prefix: "awardeeCountryCode",
  });
  private _county: Parameter<string> = new Parameter({
    prefix: "awardeeCounty",
  });
  private _district: Parameter<string> = new Parameter({
    prefix: "awardeeDistrictCode",
  });
  private _name: Parameter<string> = new Parameter({ prefix: "awardeeName" });
  private _state: Parameter<string> = new Parameter({
    prefix: "awardeeStateCode",
  });
  private _zip: Parameter<string> = new Parameter({ prefix: "awardeeZipCode" });

  /**
   * City where the Awardee resides
   * @access public
   * @property city
   * @type {Parameter}
   * @example "Fayetteville"
   */
  get city(): string {
    return this._city.value;
  }
  set city(value: string) {
    this._city.value = value;
  }

  /**
   * Country where the Awardee resides
   * @access public
   * @property country
   * @type {Parameter}
   * @example "US"
   */
  public get country(): string {
    return this._country.value;
  }
  public set country(value: string) {
    this._country.value = value;
  }

  /**
   * County where the Awardee resides
   * @access public
   * @property county
   * @type {Parameter}
   * @example "Washington"
   */
  public get county(): string {
    return this._county.value;
  }
  public set county(value: string) {
    this._county.value = value;
  }

  /**
   * Congressional district code where the Awardee resides
   * (Consists of the state code + the congressional district code)
   * @access public
   * @property district
   * @type {Parameter}
   * @example "AR01"
   */
  public get district(): string {
    return this._district.value;
  }
  public set district(value: string) {
    this._district.value = value;
  }

  /**
   * Name of the Awardee
   * @access public
   * @property name
   * @type {Parameter}
   * @example "University of Arkansas"
   */
  public get name(): string {
    return this._name.value;
  }
  public set name(value: string) {
    this._name.value = value;
  }

  /**
   * Abbreviation of the state in which the Awardee resides
   * @access public
   * @property state
   * @type {Parameter}
   * @example "AR"
   */
  public get state(): string {
    return this._state.value;
  }
  public set state(value: string) {
    this._state.value = value;
  }

  /**
   * 9-digit zip code where the Awardee resides
   * @access public
   * @property zip
   * @type {Parameter}
   * @example "72701"
   */
  public get zip(): string {
    return this._zip.value;
  }
  public set zip(value: string) {
    this._zip.value = value;
  }

  /**
   * Uses validator functions to check whether all properties are valid
   * @access public
   * @returns {boolean} Boolean indicating whether all properties are valid
   */
  public isValid(): boolean {
    return (
      this._country.isValid(this._country.value) &&
      this._district.isValid(this._district.value) &&
      this._state.isValid(this._state.value) &&
      this._zip.isValid(this._zip.value)
    );
  }

  /**
   * Generates an array containing string representations of each parameter
   * @access public
   * @returns {string[]} An array containing string representations of each parameter
   */
  public build(): string[] {
    if (!this.isValid()) throw new Error();
    return [
      this._city.toString(),
      this._district.toString(),
      this._country.toString(),
      this._county.toString(),
      this._name.toString(),
      this._state.toString(),
      this._zip.toString(),
    ].filter((parameter) => parameter != undefined);
  }
}
