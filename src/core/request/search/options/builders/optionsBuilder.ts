import { Parameter } from "../../../shared/parameter";
import { OptionsValidator } from "../validators/options";
import { OutputFieldsBuilder } from "../../../shared/outputFields/index";
import { Options, OutputFormat } from "../types/options";
import { OutputFields } from "../../../shared/outputFields/types/outputFields";

/**
 * Represents a collection of request options
 * @category Request
 * @subcategory SearchConfig
 */
export class OptionsBuilder implements Options {
  /**
   * Constructs an instance of Options
   * @param {Options} init An instance of
   */
  constructor(init?: Options) {
    Object.assign(this, init);
    this._limit.isValid = OptionsValidator.limit;
    this._offset.isValid = OptionsValidator.offset;
  }

  private _limit: Parameter<number> = new Parameter<number>({
    prefix: "rpp",
    value: 25,
  });
  private _offset: Parameter<number> = new Parameter<number>({
    prefix: "offset",
    value: 0,
  });
  private _outputFormat: Parameter<OutputFormat> = new Parameter<OutputFormat>({
    prefix: "outputFormat",
    value: "json",
  });
  private _outputFieldsBuilder: Parameter<OutputFieldsBuilder> = new Parameter<
    OutputFieldsBuilder
  >({ prefix: "printFields" });

  public outputFields: OutputFields;

  public get limit(): number {
    return this._limit.value;
  }
  public set limit(value: number) {
    this._limit.value = value;
  }

  public get offset(): number {
    return this._offset.value;
  }
  public set offset(value: number) {
    this._offset.value = value;
  }

  public get outputFormat(): OutputFormat {
    return this._outputFormat.value;
  }
  public set outputFormat(value: OutputFormat) {
    this._outputFormat.value = value;
  }

  /**
   * Uses validator functions to check whether all properties are valid
   * @access public
   * @returns {boolean} Boolean indicating whether all properties are valid
   */
  public isValid(): boolean {
    return (
      this._limit.isValid(this._limit.value) &&
      this._offset.isValid(this._limit.value)
    );
  }

  /**
   * Generates an array containing string representations of each parameter
   * @access public
   * @returns {string[]} An array containing string representations of each parameter
   */
  public build(): string[] {
    this._outputFieldsBuilder.value = new OutputFieldsBuilder({
      ...this.outputFields,
    });

    if (!this.isValid()) throw new Error();

    return [
      this._limit.toString(),
      this._offset.toString(),
      `${
        this._outputFieldsBuilder.prefix
      }=${this._outputFieldsBuilder.value.build().join(",")}`,
    ].filter((parameter) => parameter != undefined);
  }
}
