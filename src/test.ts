// Cut down on these imports by renaming most imports from /search/parameters/x to /search/parameters/xBuilder
// Create a matching instance for each class without the builder suffix
// In the Search class, change from xBuilder to x for properties, do the same for nested builders
// Getters/setters should use interfaces, build process should create new instances as needed
// This would result in type information being accessible without import (?)
import { Search, Agency } from "./index";

const test = new Search({
  parameters: {
    agency: {
      name: "NSF",
    } as Agency,
    principalInvestigator: {
      name: '"Frederick W Spiegel"',
    },
    awardee: {
      city: "Fayetteville",
      state: "AR",
    },
  },
  options: {
    limit: 10,
    outputFields: {
      agency: ["name"],
      award: [
        "abstract",
        "cfdaNumber",
        "date",
        "estimatedTotalAmount",
        "expirationDate",
        "fundProgram",
        "fundsObligatedAmount",
        "id",
        "primaryProgram",
        "projectOutcomesReport",
        "startDate",
        "title",
        "type",
      ],
      awardee: [
        "address",
        "city",
        "country",
        "county",
        "district",
        "dunsNumber",
        "name",
        "parentDunsNumber",
        "state",
        "zipCode",
      ],
      coPrincipalInvestigator: ["name"],
      options: ["limit", "offset"],
      performance: [
        "address",
        "city",
        "country",
        "county",
        "district",
        "name",
        "state",
        "zipCode",
      ],
      principalInvestigator: [
        "email",
        "firstName",
        "lastName",
        "middleInitial",
        "name",
        "phone",
      ],
      program: ["awardCode", "fundingCode"],
      programOfficer: ["email", "name", "phone"],
      publication: ["conference", "research"],
    },
  },
});

test.execute();
