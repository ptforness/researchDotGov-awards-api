import { OutputFieldsBuilder } from "./index";

export function getDefaultOutputFields(): OutputFieldsBuilder {
  return new OutputFieldsBuilder({
    agency: ["name"],
    award: ["fundsObligatedAmount", "date", "id", "title"],
    awardee: ["city", "name", "state"],
    principalInvestigator: ["firstName", "lastName"],
  });
}
