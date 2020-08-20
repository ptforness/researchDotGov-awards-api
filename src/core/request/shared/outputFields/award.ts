import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the Award class.
 * @type
 */
export type AwardField =
  | "abstract"
  | "cfdaNumber"
  | "date"
  | "estimatedTotalAmount"
  | "expirationDate"
  | "fundProgram"
  | "fundsObligatedAmount"
  | "id"
  | "primaryProgram"
  | "projectOutcomesReport"
  | "startDate"
  | "title"
  | "type";

/**
 * Represents an Award, granted by an Agency to an Awardee
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class Award {
  /**
   * Constructs an instance of Award
   * @constructor
   * @param {Array<AwardField>} init An array of Fields to return from the response
   */
  constructor(...init: Array<AwardField>) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _abstract: { enumerable: false },
      _cfdaNumber: { enumerable: false },
      _date: { enumerable: false },
      _estimatedTotalAmount: { enumerable: false },
      _expirationDate: { enumerable: false },
      _fundProgram: { enumerable: false },
      _fundsObligatedAmount: { enumerable: false },
      _id: { enumerable: false },
      _primaryProgram: { enumerable: false },
      _projectOutcomesReport: { enumerable: false },
      _startDate: { enumerable: false },
      _title: { enumerable: false },
      _type: { enumerable: false },
    });

    Object.seal(this);
  }

  private _abstract: Parameter<boolean> = new Parameter<boolean>({
    prefix: "abstractText",
    value: false,
  });
  private _cfdaNumber: Parameter<boolean> = new Parameter<boolean>({
    prefix: "cfdaNumber",
    value: false,
  });
  private _date: Parameter<boolean> = new Parameter<boolean>({
    prefix: "date",
    value: false,
  });
  private _estimatedTotalAmount: Parameter<boolean> = new Parameter<boolean>({
    prefix: "estimatedTotalAmt",
    value: false,
  });
  private _expirationDate: Parameter<boolean> = new Parameter<boolean>({
    prefix: "expDate",
    value: false,
  });
  private _fundProgram: Parameter<boolean> = new Parameter<boolean>({
    prefix: "fundProgramName",
    value: false,
  });
  private _fundsObligatedAmount: Parameter<boolean> = new Parameter<boolean>({
    prefix: "fundsObligatedAmt",
    value: false,
  });
  private _id: Parameter<boolean> = new Parameter<boolean>({
    prefix: "id",
    value: false,
  });
  private _primaryProgram: Parameter<boolean> = new Parameter<boolean>({
    prefix: "primaryProgram",
    value: false,
  });
  private _projectOutcomesReport: Parameter<boolean> = new Parameter<boolean>({
    prefix: "projectOutComesReport",
    value: false,
  });
  private _startDate: Parameter<boolean> = new Parameter<boolean>({
    prefix: "startDate",
    value: false,
  });
  private _title: Parameter<boolean> = new Parameter<boolean>({
    prefix: "title",
    value: false,
  });
  private _type: Parameter<boolean> = new Parameter<boolean>({
    prefix: "transType",
    value: false,
  });

  /**
   * Indicates whether the award abstract should be included
   * in the response
   * @access public
   * @type {boolean}
   */
  public get abstract(): boolean {
    return this._abstract.value;
  }
  public set abstract(value: boolean) {
    this._abstract.value = value;
  }

  /**
   * Indicates whether the CFDA number for the award should be
   * included in the response
   * @access public
   * @type {boolean}
   */
  public get cfdaNumber(): boolean {
    return this._cfdaNumber.value;
  }
  public set cfdaNumber(value: boolean) {
    this._cfdaNumber.value = value;
  }

  /**
   * Indicates whether the award date should be included in the
   * response
   * @access public
   * @type {boolean}
   */
  public get date(): boolean {
    return this._date.value;
  }
  public set date(value: boolean) {
    this._date.value = value;
  }

  /**
   * Indicates whether the estimated total amount should be included
   * in the response
   * @access public
   * @type {boolean}
   */
  public get estimatedTotalAmount(): boolean {
    return this._estimatedTotalAmount.value;
  }
  public set estimatedTotalAmount(value: boolean) {
    this._estimatedTotalAmount.value = value;
  }

  /**
   * Indicates whether the date when the award expires should be
   * included in the response
   * @access public
   * @type {boolean}
   */
  public get expirationDate(): boolean {
    return this._expirationDate.value;
  }
  public set expirationDate(value: boolean) {
    this._expirationDate.value = value;
  }

  /**
   * Indicates whether the name of the fund program for the award
   * should be included in the response
   * @access public
   * @type {boolean}
   */
  public get fundProgram(): boolean {
    return this._fundProgram.value;
  }
  public set fundProgram(value: boolean) {
    this._fundProgram.value = value;
  }

  /**
   * Indicates whether the amount of funds obligated should be
   * included in the response
   * @access public
   * @type {boolean}
   */
  public get fundsObligatedAmount(): boolean {
    return this._fundsObligatedAmount.value;
  }
  public set fundsObligatedAmount(value: boolean) {
    this._fundsObligatedAmount.value = value;
  }

  /**
   * Indicates whether the id of the award should be included
   * in the response
   * @access public
   * @type {boolean}
   */
  public get id(): boolean {
    return this._id.value;
  }
  public set id(value: boolean) {
    this._id.value = value;
  }

  /**
   * Indicates whether the primary program that the award belongs to
   * should be included in the response
   * @access public
   * @type {boolean}
   */
  public get primaryProgram(): boolean {
    return this._primaryProgram.value;
  }
  public set primaryProgram(value: boolean) {
    this._primaryProgram.value = value;
  }

  /**
   * Indicates whether the project outcomes report should be included
   * in the response
   * @access public
   * @type {boolean}
   */
  public get projectOutcomesReport(): boolean {
    return this._projectOutcomesReport.value;
  }
  public set projectOutcomesReport(value: boolean) {
    this._projectOutcomesReport.value = value;
  }

  /**
   * Indicates whether the start date of the award should be included
   * in the response
   * @access public
   * @type {boolean}
   */
  public get startDate(): boolean {
    return this._startDate.value;
  }
  public set startDate(value: boolean) {
    this._startDate.value = value;
  }

  /**
   * Indicates whether the title of the award should be included in
   * the response
   * @access public
   * @type {boolean}
   */
  public get title(): boolean {
    return this._title.value;
  }
  public set title(value: boolean) {
    this._title.value = value;
  }

  /**
   * Indicates whether the type of the award should be included in
   * the response
   * @access public
   * @type {boolean}
   */
  public get type(): boolean {
    return this._type.value;
  }
  public set type(value: boolean) {
    this._type.value = value;
  }

  /**
   * Outputs a list of response fields to be included in the request
   * @access public
   * @returns {string[]} List of response fields to be included in the request
   */
  public build(): string[] {
    const outputFields: Parameter<boolean>[] = [
      this._abstract,
      this._cfdaNumber,
      this._date,
      this._estimatedTotalAmount,
      this._expirationDate,
      this._fundProgram,
      this._fundsObligatedAmount,
      this._id,
      this._primaryProgram,
      this._projectOutcomesReport,
      this._startDate,
      this._title,
      this._type,
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
    Object.assign(this, new Award());
  }
}
