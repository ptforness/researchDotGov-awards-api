import { DateRange } from "./util/dateRange";
import { Parameter } from "../../../shared/parameter";
import { Award, AwardType } from "../types/award";

/**
 * Represents an Award, granted by an Agency to an Awardee
 * @class
 * @category Request
 * @subcategory SearchConfig
 */
export class AwardBuilder implements Award {
  /**
   * Constructs an instance of Award
   * @constructor
   * @param {Award} init An instance of
   */
  constructor(init?: Award) {
    Object.assign(this, init);
  }

  private _cfdaNumber: Parameter<string> = new Parameter({
    prefix: "cfdaNumber",
  });
  private _coPrincipalInvestigator: Parameter<string> = new Parameter({
    prefix: "coPDPI",
  });
  private _dateRange: DateRange = new DateRange(
    new Parameter<Date>({ prefix: "dateStart" }),
    new Parameter<Date>({ prefix: "dateEnd" })
  );
  private _expirationDateRange: DateRange = new DateRange(
    new Parameter<Date>({ prefix: "expDateStart" }),
    new Parameter<Date>({ prefix: "expDateEnd" })
  );
  private _fundsObligatedFrom: Parameter<number> = new Parameter({
    prefix: "fundsObligatedAmtFrom",
  });
  private _fundsObligatedTo: Parameter<number> = new Parameter({
    prefix: "fundsObligatedAmtTo",
  });
  private _id: Parameter<string> = new Parameter({ prefix: "id" });
  private _principalInvestigator: Parameter<string> = new Parameter({
    prefix: "pdPIName",
  });
  private _projectOutcomesOnly: Parameter<boolean> = new Parameter({
    prefix: "projectOutcomesOnly",
  });
  private _recoveryActOnly: Parameter<boolean> = new Parameter({
    prefix: "recoveryActOnly",
  });
  private _startDateRange: DateRange = new DateRange(
    new Parameter<Date>({ prefix: "startDateStart" }),
    new Parameter<Date>({ prefix: "startDateEnd" })
  );
  private _totalAmountFrom: Parameter<number> = new Parameter({
    prefix: "estimatedTotalAmtFrom",
  });
  private _totalAmountTo: Parameter<number> = new Parameter({
    prefix: "estimatedTotalAmtTo",
  });
  private _type: Parameter<AwardType> = new Parameter({
    prefix: "transType",
    value: "Grant",
  });

  public get cfdaNumber(): string {
    return this._cfdaNumber.value;
  }
  public set cfdaNumber(value: string) {
    this._cfdaNumber.value = value;
  }

  public get coPrincipalInvestigator(): string {
    return this._coPrincipalInvestigator.value;
  }
  public set coPrincipalInvestigator(value: string) {
    this._coPrincipalInvestigator.value = value;
  }

  public get dateEnd(): Date {
    return this._dateRange.end;
  }
  public set dateEnd(value: Date) {
    this._dateRange.end = value;
  }

  public get dateStart(): Date {
    return this._dateRange.start;
  }
  public set dateStart(value: Date) {
    this._dateRange.start = value;
  }

  public get expirationDateEnd(): Date {
    return this._expirationDateRange.end;
  }
  public set expirationDateEnd(value: Date) {
    this._expirationDateRange.end = value;
  }

  public get expirationDateStart(): Date {
    return this._expirationDateRange.start;
  }
  public set expirationDateStart(value: Date) {
    this._expirationDateRange.start = value;
  }

  public get fundsObligatedFrom(): number {
    return this._fundsObligatedFrom.value;
  }
  public set fundsObligatedFrom(value: number) {
    this._fundsObligatedFrom.value = value;
  }

  public get fundsObligatedTo(): number {
    return this._fundsObligatedTo.value;
  }
  public set fundsObligatedTo(value: number) {
    this._fundsObligatedTo.value = value;
  }

  public get id(): string {
    return this._id.value;
  }
  public set id(value: string) {
    this._id.value = value;
  }

  public get principalInvestigator(): string {
    return this._principalInvestigator.value;
  }
  public set principalInvestigator(value: string) {
    this._principalInvestigator.value = value;
  }

  public get projectOutcomesOnly(): boolean {
    return this._projectOutcomesOnly.value;
  }
  public set projectOutcomesOnly(value: boolean) {
    this._projectOutcomesOnly.value = value;
  }

  public get recoveryActOnly(): boolean {
    return this._recoveryActOnly.value;
  }
  public set recoveryActOnly(value: boolean) {
    this._recoveryActOnly.value = value;
  }

  public get startDateEnd(): Date {
    return this._startDateRange.end;
  }
  public set startDateEnd(value: Date) {
    this._startDateRange.end = value;
  }

  public get startDateStart(): Date {
    return this._startDateRange.start;
  }
  public set startDateStart(value: Date) {
    this._startDateRange.start = value;
  }

  public get totalAmountFrom(): number {
    return this._totalAmountFrom.value;
  }
  public set totalAmountFrom(value: number) {
    this._totalAmountFrom.value = value;
  }

  public get totalAmountTo(): number {
    return this._totalAmountTo.value;
  }
  public set totalAmountTo(value: number) {
    this._totalAmountTo.value = value;
  }

  /**
   * @todo Move this to separate class
   */
  public get type(): AwardType {
    return this._type.value;
  }
  public set type(value: AwardType) {
    this._type.value = value;
  }

  /**
   * Generates an array containing string representations of each parameter
   * @access public
   * @returns {string[]} An array containing string representations of each parameter
   */
  public build(): string[] {
    return [
      this._cfdaNumber.toString(),
      this._coPrincipalInvestigator.toString(),
      ...this._dateRange.build(),
      ...this._expirationDateRange.build(),
      this._fundsObligatedFrom.toString(),
      this._fundsObligatedTo.toString(),
      this._id.toString(),
      this._principalInvestigator.toString(),
      this._projectOutcomesOnly.toString(),
      this._recoveryActOnly.toString(),
      ...this._startDateRange.build(),
      this._totalAmountFrom.toString(),
      this._totalAmountTo.toString(),
      this._type.toString(),
    ].filter((parameter) => parameter != undefined);
  }

  /**
   * Resets all properties to default values
   * @access public
   * @returns {void} void
   */
  public reset(): void {
    Object.assign(this, new AwardBuilder());
  }
}
