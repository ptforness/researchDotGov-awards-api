import { Agency } from "./agency";
import { Award } from "./award";
import { Awardee } from "./awardee";
import { CoPrincipalInvestigator } from "./coPrincipalInvestigator";
import { Performance } from "./performance";
import { PrincipalInvestigator } from "./principalInvestigator";
import { ProgramOfficer } from "./programOfficer";

/**
 * @typedef Parameters
 * @param {Agency} agency
 */
export type Parameters = {
  agency?: Agency;
  award?: Award;
  awardee?: Awardee;
  coPrincipalInvestigator?: CoPrincipalInvestigator;
  performance?: Performance;
  principalInvestigator?: PrincipalInvestigator;
  programOfficer?: ProgramOfficer;
};

export type {
  Agency,
  Award,
  Awardee,
  CoPrincipalInvestigator,
  Performance,
  PrincipalInvestigator,
  ProgramOfficer,
};
