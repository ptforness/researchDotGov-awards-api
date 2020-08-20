import { AgencyField } from "../agency";
import { AwardField } from "../award";
import { AwardeeField } from "../awardee";
import { CoPrincipalInvestigatorField } from "../coPrincipalInvestigator";
import { OptionsField } from "../options";
import { PerformanceField } from "../performance";
import { PrincipalInvestigatorField } from "../principalInvestigator";
import { ProgramField } from "../program";
import { ProgramOfficerField } from "../programOfficer";
import { PublicationField } from "../publication";

export type OutputFields = {
  agency?: AgencyField[];
  award?: AwardField[];
  awardee?: AwardeeField[];
  coPrincipalInvestigator?: CoPrincipalInvestigatorField[];
  options?: OptionsField[];
  performance?: PerformanceField[];
  principalInvestigator?: PrincipalInvestigatorField[];
  program?: ProgramField[];
  programOfficer?: ProgramOfficerField[];
  publication?: PublicationField[];
};
