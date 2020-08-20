import { Parameter } from "../../../../shared/parameter";

/**
 * Represents a range of dates
 * @class
 * @category Request
 * @subcategory SearchConfig
 */
export class DateRange {
  /**
   * Constructs an instance of DateRange
   * @constructor
   * @param {Date} start The start date of the range
   * @param {Date} end The end date of the range
   */
  constructor(start: Parameter<Date>, end: Parameter<Date>) {
    this._start = start;
    this._end = end;
  }

  private _end: Parameter<Date>;
  private _start: Parameter<Date>;

  /**
   * End date for the range
   * @access public
   * @property end
   * @type {Parameter<Date>}
   */
  public get end(): Date {
    return this._end.value;
  }
  public set end(value: Date) {
    this._end.value = value;
  }

  /**
   * Start date for the range
   * @access public
   * @property start
   * @type {Parameter<Date>}
   */
  public get start(): Date {
    return this._start.value;
  }
  public set start(value: Date) {
    this._start.value = value;
  }

  /**
   * Handles edge cases in which one date is missing, by setting the missing date equal to the date which is present
   * @access public
   * @returns {boolean} Boolean indicating whether at least one end of the range was set prior to the function being called
   */
  public clean(): boolean {
    if (this._start.value != null && this._end.value != null) {
      // Both not null: true
      return true;
    }
    if (this._start.value == null && this._end.value != null) {
      // Start null: true
      this._start.value = this._end.value;
      return true;
    }
    if (this._start.value != null && this._end.value == null) {
      // End null: true
      this._end.value = this._start.value;
      return true;
    }
    return false; // Both null: false
  }

  /**
   * Uses validator functions to check whether all properties are valid
   * @access public
   * @returns {boolean} Boolean indicating whether all properties are valid
   */
  public isValid(): boolean {
    if (this._start.value > this._end.value) return false;
    return true;
  }

  /**
   * Generates an array containing string representations of each parameter
   * @access public
   * @returns {string[]} An array containing string representations of each parameter
   */
  public build(): string[] {
    if (!this.isValid()) {
      throw new Error(
        `${this._start.prefix} cannot be more recent than ${this._end.prefix}.`
      );
    }
    const cleaned = this.clean();
    if (!cleaned) return []; // DateRange has no start/end values

    return [this._end.toString(), this._start.toString()].filter(
      (parameter) => parameter != undefined
    );
  }
}
