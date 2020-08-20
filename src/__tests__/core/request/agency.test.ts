import Agency from "../../../core/request/search/parameters/agencyBuilder";

test("instantiate Agency with default values", () => {
  const agency: Agency = new Agency();
  expect(agency.name).toBe(Agency.Names.NSF);
});

test("instantiate Agency with name set to NASA", () => {
  const agency: Agency = new Agency({ name: Agency.Names.NASA });
  expect(agency.name).toBe(Agency.Names.NASA);
});

test("create object literal from Agency instance properties", () => {
  const agency: Agency = new Agency();
  const literal: any = agency.build();
  expect(literal).toEqual({
    agency: "NSF",
  });
});
