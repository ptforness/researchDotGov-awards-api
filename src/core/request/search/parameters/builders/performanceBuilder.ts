import { Parameter } from "../../../shared/parameter";
import { LocationValidator } from "../validators/location";
import { Performance } from "../types/performance";

/**
 * Represents the location where grant research occurred
 * @category Request
 * @subcategory SearchConfig
 */
export class PerformanceBuilder implements Performance {
  /**
   * Constructs an instance of Performance
   * @constructor
   * @param {Performance} init An instance of Performance
   */
  constructor(init?: Performance) {
    this._country.isValid = LocationValidator.country;
    this._district.isValid = LocationValidator.congressionalDistrict;
    this._state.isValid = LocationValidator.state;
    this._zip.isValid = LocationValidator.zip;
    Object.assign(this, init);
  }

  private _city: Parameter<string> = new Parameter({ prefix: "perfCity" });
  private _country: Parameter<string> = new Parameter({
    prefix: "perfCountryCode",
  });
  private _county: Parameter<string> = new Parameter({ prefix: "perfCounty" });
  private _district: Parameter<string> = new Parameter({
    prefix: "perfDistrictCode",
  });
  private _name: Parameter<string> = new Parameter({ prefix: "perfLocation" });
  private _state: Parameter<string> = new Parameter({
    prefix: "perfStateCode",
  });
  private _zip: Parameter<string> = new Parameter({ prefix: "perfZipCode" });

  /**
   * City where the Performance occurred
   * @access public
   * @type {string}
   * @example "Fayetteville"
   */
  get city(): string {
    return this._city.value;
  }
  set city(value: string) {
    this._city.value = value;
  }

  /**
   * Country where the Performance occurred
   * @access public
   * @type {string}
   * @example "US"
   */
  public get country(): string {
    return this._country.value;
  }
  public set country(value: string) {
    this._country.value = value;
  }

  /**
   * County where the Performance occurred
   * @access public
   * @type {string}
   * @example "Washington"
   */
  public get county(): string {
    return this._county.value;
  }
  public set county(value: string) {
    this._county.value = value;
  }

  /**
   * Congressional district code where the Performance occurred
   * (Consists of the state code + the congressional district code)
   * @access public
   * @type {string}
   * @example "AR01"
   */
  public get district(): string {
    return this._district.value;
  }
  public set district(value: string) {
    this._district.value = value;
  }

  /**
   * Name of the Performance location
   * @access public
   * @type {string}
   * @example "University of Arkansas"
   */
  public get name(): string {
    return this._name.value;
  }
  public set name(value: string) {
    this._name.value = value;
  }

  /**
   * Abbreviation of the state in which the Performance occurred.
   * @access public
   * @type {string}
   * @example "AR"
   */
  public get state(): string {
    return this._state.value;
  }
  public set state(value: string) {
    this._state.value = value;
  }

  /**
   * 9-digit zip code where the Performance occurred.
   * @access public
   * @type {string}
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
      this._district.isValid() &&
      this._country.isValid() &&
      this._state.isValid() &&
      this._zip.isValid()
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
