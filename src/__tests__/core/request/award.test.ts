import Award from "../../../core/request/award";

let defaultAward: Award;
let validAward: Award;
let invalidAward: Award;

beforeAll(() => {
  defaultAward = new Award();
  validAward = new Award({
    id: "id-123",
    principalInvestigator: "John Doe",
    coPrincipalInvestigator: "Jane Doe",
    cfdaNumber: "cfda-123",
    dateStart: new Date("01/01/2000"),
    dateEnd: new Date("01/02/2000"),
    startDateStart: new Date("01/03/2000"),
    startDateEnd: new Date("01/04/2000"),
    expirationDateStart: new Date("01/05/2000"),
    expirationDateEnd: new Date("01/06/2000"),
    totalAmountFrom: 111,
    totalAmountTo: 222,
    fundsObligatedFrom: 333,
    fundsObligatedTo: 444,
    projectOutcomesOnly: true,
    recoveryActOnly: false,
    type: Award.Type.CoOpAgreement,
  });
  invalidAward = new Award({
    dateStart: new Date("01/01/2000"),
    dateEnd: new Date("01/01/1000"),
  });
});

test("instantiate Award with default constructor", () => {
  expect(defaultAward).toMatchObject({
    id: undefined,
    principalInvestigator: undefined,
    coPrincipalInvestigator: undefined,
    cfdaNumber: undefined,
    dateStart: undefined,
    dateEnd: undefined,
    startDateStart: undefined,
    startDateEnd: undefined,
    expirationDateStart: undefined,
    expirationDateEnd: undefined,
    totalAmountFrom: undefined,
    totalAmountTo: undefined,
    fundsObligatedFrom: undefined,
    fundsObligatedTo: undefined,
    projectOutcomesOnly: undefined,
    recoveryActOnly: undefined,
    type: Award.Type.Grant,
  });
});

test("instantiate Award using Partial<Award>", () => {
  expect(validAward).toMatchObject({
    id: "id-123",
    principalInvestigator: "John Doe",
    coPrincipalInvestigator: "Jane Doe",
    cfdaNumber: "cfda-123",
    dateStart: new Date("01/01/2000"),
    dateEnd: new Date("01/02/2000"),
    startDateStart: new Date("01/03/2000"),
    startDateEnd: new Date("01/04/2000"),
    expirationDateStart: new Date("01/05/2000"),
    expirationDateEnd: new Date("01/06/2000"),
    totalAmountFrom: 111,
    totalAmountTo: 222,
    fundsObligatedFrom: 333,
    fundsObligatedTo: 444,
    projectOutcomesOnly: true,
    recoveryActOnly: false,
    type: Award.Type.CoOpAgreement,
  });
});

test("valid award gets built", () => {
  expect(validAward.build()).toMatchObject({
    id: "id-123",
    pdPIName: "John Doe",
    coPDPI: "Jane Doe",
    cfdaNumber: "cfda-123",
    dateStart: "01/01/2000",
    dateEnd: "01/02/2000",
    startDateStart: "01/03/2000",
    startDateEnd: "01/04/2000",
    expDateStart: "01/05/2000",
    expDateEnd: "01/06/2000",
    estimatedTotalAmtFrom: "111",
    estimatedTotalAmtTo: "222",
    fundsObligatedAmtFrom: "333",
    fundsObligatedAmtTo: "444",
    projectOutcomesOnly: "true",
    recoveryActOnly: "false",
    transType: "CoOpAgreement",
  });
});

test("invalid date range throws error", () => {
  expect(() => invalidAward.build()).toThrowError(
    "dateStart cannot be more recent than dateEnd."
  );
});
