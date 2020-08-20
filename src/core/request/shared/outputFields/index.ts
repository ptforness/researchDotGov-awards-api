import { Agency, AgencyField } from "./agency";
import { Award, AwardField } from "./award";
import { Awardee, AwardeeField } from "./awardee";
import {
  CoPrincipalInvestigator,
  CoPrincipalInvestigatorField,
} from "./coPrincipalInvestigator";
import { Options, OptionsField } from "./options";
import { Performance, PerformanceField } from "./performance";
import {
  PrincipalInvestigator,
  PrincipalInvestigatorField,
} from "./principalInvestigator";
import { Program, ProgramField } from "./program";
import { ProgramOfficer, ProgramOfficerField } from "./programOfficer";
import { Publication, PublicationField } from "./publication";
import { getDefaultOutputFields } from "./default";
import { OutputFields } from "./types/outputFields";

/**
 * Represents a collection containing subcollections of fields
 * to return from a response.
 * @class
 * @category Request
 */
export class OutputFieldsBuilder implements OutputFields {
  /**
   * Constructs an instance of ResponseConfig
   * @constructor
   * @param {OutputFields} init A partial instance of ResponseConfig
   */
  constructor(init?: OutputFields) {
    if (init == undefined) {
      Object.assign(this, getDefaultOutputFields());
    } else {
      Object.assign(this, init);
    }
  }

  private _agency: Agency = new Agency();
  private _award: Award = new Award();
  private _awardee: Awardee = new Awardee();
  private _coPrincipalInvestigator: CoPrincipalInvestigator = new CoPrincipalInvestigator();
  private _options: Options = new Options();
  private _performance: Performance = new Performance();
  private _principalInvestigator: PrincipalInvestigator = new PrincipalInvestigator();
  private _program: Program = new Program();
  private _programOfficer: ProgramOfficer = new ProgramOfficer();
  private _publication: Publication = new Publication();

  /**
   *
   * @access public
   * @type {Agency}
   */
  public set agency(fields: AgencyField[]) {
    this._agency = new Agency(...fields);
  }

  /**
   *
   * @access public
   * @type {Award}
   */
  public set award(fields: AwardField[]) {
    this._award = new Award(...fields);
  }

  /**
   *
   * @access public
   * @type {Awardee}
   */
  public set awardee(fields: AwardeeField[]) {
    this._awardee = new Awardee(...fields);
  }

  /**
   *
   * @access public
   * @type {CoPrincipalInvestigator}
   */
  public set coPrincipalInvestigator(fields: CoPrincipalInvestigatorField[]) {
    this._coPrincipalInvestigator = new CoPrincipalInvestigator(...fields);
  }

  /**
   *
   * @access public
   * @type {Options}
   */
  public set options(fields: OptionsField[]) {
    this._options = new Options(...fields);
  }

  /**
   *
   * @access public
   * @type {Performance}
   */
  public set performance(fields: PerformanceField[]) {
    this._performance = new Performance(...fields);
  }

  /**
   *
   * @access public
   * @type {PrincipalInvestigator}
   */
  public set principalInvestigator(fields: PrincipalInvestigatorField[]) {
    this._principalInvestigator = new PrincipalInvestigator(...fields);
  }

  /**
   *
   * @access public
   * @type {Program}
   */
  public set program(fields: ProgramField[]) {
    this._program = new Program(...fields);
  }

  /**
   *
   * @access public
   * @type {ProgramOfficer}
   */
  public set programOfficer(fields: ProgramOfficerField[]) {
    this._programOfficer = new ProgramOfficer(...fields);
  }

  /**
   *
   * @access public
   * @type {Publication}
   */
  public set publication(fields: PublicationField[]) {
    this._publication = new Publication(...fields);
  }

  /**
   * Outputs a list of response fields to be included in the request
   * @access public
   * @returns {string[]} List of response fields to be included in the request
   */
  public build(): string[] {
    return [
      ...this._agency.build(),
      ...this._award.build(),
      ...this._awardee.build(),
      ...this._coPrincipalInvestigator.build(),
      ...this._options.build(),
      ...this._performance.build(),
      ...this._principalInvestigator.build(),
      ...this._program.build(),
      ...this._programOfficer.build(),
      ...this._publication.build(),
    ];
  }

  /**
   * Resets all properties to default values
   * @access public
   * @returns {void} void
   */
  public reset(): void {
    Object.assign(this, new OutputFieldsBuilder());
  }
}
