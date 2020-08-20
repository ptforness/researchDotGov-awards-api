import DateRange from "../../../core/request/search/parameters/dateRange";
import Parameter from "../../../core/request/shared/parameter";

let start: Parameter<Date>;
let end: Parameter<Date>;
let emptyStart: Parameter<Date>;
let emptyEnd: Parameter<Date>;

let validRange: DateRange;
let invalidRange: DateRange;
let emptyRange: DateRange;
let missingStartRange: DateRange;
let missingEndRange: DateRange;

beforeAll(() => {
  start = new Parameter<Date>({
    prefix: "start",
    value: new Date("01/01/1000"),
  });
  end = new Parameter<Date>({
    prefix: "start",
    value: new Date("02/02/2000"),
  });
  emptyStart = new Parameter<Date>({ prefix: "emptyStart" });
  emptyEnd = new Parameter<Date>({ prefix: "emptyEnd" });

  validRange = new DateRange(start, end);
  invalidRange = new DateRange(end, start);
  emptyRange = new DateRange(emptyStart, emptyEnd);
  missingStartRange = new DateRange(emptyStart, end);
  missingEndRange = new DateRange(start, emptyEnd);
});

test("instantiate DateRange with start and end parameters", () => {
  expect(validRange).toMatchObject({
    start: start.value,
    end: end.value,
    startPrefix: start.prefix,
    endPrefix: end.prefix,
  });
});

test("valid DateRange builds", () => {
  expect(validRange.build()).toMatchObject({
    [start.prefix]: start.toString(),
    [end.prefix]: end.toString(),
  });
});

test("range where start > end throws", () => {
  expect(() => invalidRange.build()).toThrowError(
    `${start.prefix} cannot be more recent than ${end.prefix}.`
  );
});

test("empty range returns undefined for start and end values", () => {
  expect(emptyRange.build()).toBeNull();
});

test("range with non-null start and null end replaces start with end", () => {
  expect(missingStartRange.build()).toMatchObject({
    [emptyStart.prefix]: end.toString(),
    [end.prefix]: end.toString(),
  });
});

test("range with null start and non-null end replaces end with start", () => {
  expect(missingEndRange.build()).toMatchObject({
    [start.prefix]: start.toString(),
    [emptyEnd.prefix]: start.toString(),
  });
});
