import Options from "../../../core/request/search/parameters/optionsBuilder";
import PrintFields from "../../../deprecated/printFields";

let defaultOptions: Options;
let validOptions: Options;
let invalidOptions: Options;
let callback: () => void;

beforeAll(() => {
  defaultOptions = new Options();
  validOptions = new Options({
    callback,
    limit: 20,
    offset: 10,
    printFields: new PrintFields(),
  });
  invalidOptions = new Options({
    limit: 1000,
    offset: -100,
  });
});

test("instantiate Options using default constructor", () => {
  expect(defaultOptions).toMatchObject({
    callback,
    limit: 25,
    offset: 0,
    printFields: new PrintFields(),
  });
});

test("instantiate Options using Partial<Options>", () => {
  expect(validOptions).toMatchObject({
    callback,
    limit: 20,
    offset: 10,
    printFields: new PrintFields(),
  });
});

test("valid Options instance should build", () => {
  expect(validOptions.build()).toMatchObject({
    rpp: 20,
    offset: 10,
    outputFormat: "json",
    printFields:
      "id,agency,awardeeCity,awardeeName,awardeeStateCode,date,fundsObligatedAmt,title,piFirstName,piLastName",
  });
});

test("invalid Options instance should throw", () => {
  expect(() => invalidOptions.build()).toThrow();
});
