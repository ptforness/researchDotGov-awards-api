import { AgencyBuilder } from "./agencyBuilder";
import { AwardBuilder } from "./awardBuilder";
import { AwardeeBuilder } from "./awardeeBuilder";
import { CoPrincipalInvestigatorBuilder } from "./coPrincipalInvestigatorBuilder";
import { PerformanceBuilder } from "./performanceBuilder";
import { PrincipalInvestigatorBuilder } from "./principalInvestigatorBuilder";
import { ProgramOfficerBuilder } from "./programOfficerBuilder";
import { Agency } from "../types/agency";
import { Award } from "../types/award";
import { Awardee } from "../types/awardee";
import { CoPrincipalInvestigator } from "../types/coPrincipalInvestigator";
import { Performance } from "../types/performance";
import { PrincipalInvestigator } from "../types/principalInvestigator";
import { ProgramOfficer } from "../types/programOfficer";
import { Parameters } from "../types/parameters";

export class ParametersBuilder {
  constructor(init?: Parameters) {
    Object.assign(this, init);
  }

  private _agencyBuilder: AgencyBuilder;
  private _awardBuilder: AwardBuilder;
  private _awardeeBuilder: AwardeeBuilder;
  private _coPrincipalInvestigatorBuilder: CoPrincipalInvestigatorBuilder;
  private _performanceBuilder: PerformanceBuilder;
  private _principalInvestigatorBuilder: PrincipalInvestigatorBuilder;
  private _programOfficerBuilder: ProgramOfficerBuilder;

  public agency?: Agency = {} as Agency;
  public award?: Award = {} as Award;
  public awardee?: Awardee = {} as Awardee;
  public coPrincipalInvestigator?: CoPrincipalInvestigator = {} as CoPrincipalInvestigator;
  public performance?: Performance = {} as Performance;
  public principalInvestigator?: PrincipalInvestigator = {} as PrincipalInvestigator;
  // public program?: Program = new Program();
  public programOfficer?: ProgramOfficer = {} as ProgramOfficer;

  /**
   * Uses validator functions to check whether all properties are valid
   * @access public
   * @returns {boolean} Boolean indicating whether all properties are valid
   */

  public isValid(): boolean {
    if (!this._awardeeBuilder.isValid()) return false;
    if (!this._performanceBuilder.isValid()) return false;
    return true;
  }

  public build(): string[] {
    this._agencyBuilder = new AgencyBuilder({ ...this.agency });
    this._awardBuilder = new AwardBuilder({ ...this.award });
    this._awardeeBuilder = new AwardeeBuilder({ ...this.awardee });
    this._coPrincipalInvestigatorBuilder = new CoPrincipalInvestigatorBuilder({
      ...this.coPrincipalInvestigator,
    });
    this._performanceBuilder = new PerformanceBuilder({ ...this.performance });
    this._principalInvestigatorBuilder = new PrincipalInvestigatorBuilder({
      ...this.principalInvestigator,
    });
    this._programOfficerBuilder = new ProgramOfficerBuilder({
      ...this.programOfficer,
    });

    if (!this.isValid()) throw new Error();

    return [
      ...this._agencyBuilder.build(),
      ...this._awardBuilder.build(),
      ...this._awardeeBuilder.build(),
      ...this._coPrincipalInvestigatorBuilder.build(),
      ...this._performanceBuilder.build(),
      ...this._principalInvestigatorBuilder.build(),
      ...this._programOfficerBuilder.build(),
    ];
  }
}
