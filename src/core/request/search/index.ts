import { ParametersBuilder } from "./parameters/builders/parametersBuilder";
import { OptionsBuilder } from "./options/builders/optionsBuilder";
import {
  Parameters,
  Agency,
  Award,
  Awardee,
  CoPrincipalInvestigator,
  Performance,
  PrincipalInvestigator,
  ProgramOfficer,
} from "./parameters/types/parameters";
import { Options } from "./options/types/options";

/**
 * Represents a search against the NSF Awards API
 * @class
 */
export class Search {
  /**
   * @constructor
   * @param {Parameters} parameters
   * @param {Options} options
   */
  constructor(init?: Partial<Search>) {
    Object.assign(this, init);
  }

  private _host = "api.nsf.gov";
  private _protocol = "https:";
  private _pathname = "services/v1/awards";
  private _format = "json";
  private _optionsBuilder: OptionsBuilder;
  private _parametersBuilder: ParametersBuilder;

  public parameters: Parameters = {};
  public options: Options = {};

  public execute(): void {
    this._optionsBuilder = new OptionsBuilder({ ...this.options });
    this._parametersBuilder = new ParametersBuilder({ ...this.parameters });

    this._format = this.options.outputFormat ?? this._format;
    const uri: URL = new URL(
      `${this._protocol}//${this._host}/${this._pathname}.${this._format}`
    );
    for (const param of [
      ...this._parametersBuilder.build(),
      ...this._optionsBuilder.build(),
    ]) {
      uri.searchParams.set(param.split(/=(.+)/)[0], param.split(/=(.+)/)[1]);
    }
    console.log(uri);
    return;
  }
}

export {
  Parameters,
  Agency,
  Award,
  Awardee,
  CoPrincipalInvestigator,
  Performance,
  PrincipalInvestigator,
  ProgramOfficer,
};
