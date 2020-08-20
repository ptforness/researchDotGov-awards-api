import Awardee from "../../../core/request/awardee";

let defaultAwardee: Awardee;
let validAwardee: Awardee;
let invalidAwardee: Awardee;

beforeAll(() => {
  defaultAwardee = new Awardee();
  validAwardee = new Awardee({
    city: "Fayetteville",
    congressionalDistrict: "AR03",
    country: "US",
    county: "Washington",
    name: "University of Arkansas",
    state: "AR",
    zip: "727010002",
  });
  invalidAwardee = new Awardee({
    congressionalDistrict: "INVALID",
    country: "INVALID",
    state: "INVALID",
    zip: "INVALID",
  });
});

test("instantiate Awardee with default constructor", () => {
  expect(defaultAwardee).toMatchObject({
    city: undefined,
    congressionalDistrict: undefined,
    country: undefined,
    county: undefined,
    name: undefined,
    state: undefined,
    zip: undefined,
  });
});

test("instantiate Awardee from Partial<Awardee>", () => {
  expect(validAwardee).toMatchObject({
    city: "Fayetteville",
    congressionalDistrict: "AR03",
    country: "US",
    county: "Washington",
    name: "University of Arkansas",
    state: "AR",
    zip: "727010002",
  });
});

test("valid Awardee should build", () => {
  expect(validAwardee.build()).toMatchObject({
    awardeeCity: validAwardee.city.toString(),
    awardeeDistrictCode: validAwardee.congressionalDistrict.toString(),
    awardeeCountryCode: validAwardee.country.toString(),
    awardeeCounty: validAwardee.county.toString(),
    awardeeName: validAwardee.name.toString(),
    awardeeStateCode: validAwardee.state.toString(),
    awardeeZipCode: validAwardee.zip.toString(),
  });
});

test("invalid Awardee should not build", () => {
  expect(() => invalidAwardee.build()).toThrow();
});
