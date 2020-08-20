import {
  RawSearchResponse,
  RawRecord,
  ProcessedSearchResponse,
  Agency,
  Award,
  Awardee,
  CoPrincipalInvestigator,
  Performance,
  PrincipalInvestigator,
  Program,
  ProgramOfficer,
  Publication,
  ProcessedRecord,
  RawServiceNotification,
  ProcessedServiceNotification,
} from "./types/search";

function processResponse(
  searchResponse: RawSearchResponse
): ProcessedSearchResponse {
  const processedRecords: ProcessedRecord[] = [];
  for (const record of searchResponse.records) {
    processedRecords.push({
      agency: processAgency(record),
      award: processAward(record),
      awardee: processAwardee(record),
      coPrincipalInvestigators: processCoPrincipalInvestigators(record),
      performance: processPerformance(record),
      principalInvestigator: processPrincipalInvestigator(record),
      program: processProgram(record),
      programOfficer: processProgramOfficer(record),
      publication: processPublication(record),
    } as ProcessedRecord);
  }

  return {
    options: searchResponse.options,
    records: processedRecords,
    serviceNotification: processServiceNotification(
      searchResponse.serviceNotification
    ),
  } as ProcessedSearchResponse;
}

function processAgency(record: RawRecord): Agency {
  return {
    name: record.agency,
  } as Agency;
}

function processAward(record: RawRecord): Award {
  return {
    abstract: record.abstractText,
    cfdaNumber: record.cfdaNumber,
    date: toDateObject(record.date),
    estimatedTotalAmount: toCents(record.estimatedTotalAmt),
    expirationDate: toDateObject(record.expDate),
    fundProgram: record.fundProgramName,
    fundsObligatedAmt: toCents(record.fundsObligatedAmt),
    id: toNumber(record.id),
    primaryProgram: record.primaryProgram,
    projectOutcomesReport: record.projectOutComesReport,
    startDate: toDateObject(record.startDate),
    title: record.title,
    type: record.transType,
  } as Award;
}

function processAwardee(record: RawRecord): Awardee {
  return {
    address: record.awardeeAddress,
    city: record.awardeeCity,
    country: record.awardeeCountryCode,
    county: record.awardeeCounty,
    district: record.awardeeCounty,
    dunsNumber: toNumber(record.dunsNumber),
    name: record.awardeeName,
    parentDunsNumber: toNumber(record.parentDunsNumber),
    state: record.awardeeStateCode,
    zipCode: record.awardeeZipCode,
  } as Awardee;
}

function processCoPrincipalInvestigators(
  record: RawRecord
): CoPrincipalInvestigator[] {
  let coPrincipalInvestigators: CoPrincipalInvestigator[] | undefined;
  for (const name of record.coPDPI) {
    if (coPrincipalInvestigators == null) coPrincipalInvestigators = [];
    const nameParts = name.split(" ");
    coPrincipalInvestigators.push({
      firstName: nameParts[0],
      lastName: nameParts[2],
      middleInitial: nameParts[1],
      name,
    } as CoPrincipalInvestigator);
  }
  return coPrincipalInvestigators;
}

function processPerformance(record: RawRecord): Performance {
  return {
    address: record.perfAddress,
    city: record.perfCity,
    country: record.perfCountryCode,
    county: record.perfCounty,
    district: record.perfDistrictCode,
    name: record.perfLocation,
    state: record.perfStateCode,
    zipCode: toNumber(record.perfZipCode),
  } as Performance;
}

function processPrincipalInvestigator(
  record: RawRecord
): PrincipalInvestigator {
  return {
    email: toEmail(record.piEmail),
    firstName: record.piFirstName,
    lastName: record.piLastName,
    middleInitial: record.piMiddleInitial,
    name: record.pdPIName,
    phone: toNumber(record.piPhone),
  } as PrincipalInvestigator;
}

function processProgram(record: RawRecord): Program {
  return {
    awardCode: record.awardAgencyCode,
    fundingCode: record.fundAgencyCode,
  } as Program;
}

function processProgramOfficer(record: RawRecord): ProgramOfficer {
  return {
    email: toEmail(record.poEmail),
    name: record.poName,
    phone: toNumber(record.poPhone),
  } as ProgramOfficer;
}

function processPublication(record: RawRecord): Publication {
  return {
    conference: record.publicationConference,
    research: record.publicationResearch,
  } as Publication;
}

function processServiceNotification(
  serviceNotification: RawServiceNotification
): ProcessedServiceNotification {
  return {
    code: serviceNotification.notificationCode,
    message: serviceNotification.notificationMessage,
    type: serviceNotification.notificationType,
  } as ProcessedServiceNotification;
}

function toCents(amount: string): number {
  const forbiddenChars = /[^\d.]+/g;
  const matches: RegExpMatchArray = amount.match(forbiddenChars);
  if (matches.length > 0) {
    for (const match of matches) {
      amount = amount.replace(match, "");
    }
  }
  if (amount.includes(".")) {
    amount = amount.replace(".", "");
  } else {
    amount = `${amount}00`;
  }
  return Number(amount);
}

function toDateObject(date: string): Date {
  const dateParts: string[] = date.split("/");
  const d = new Date();
  d.setUTCFullYear(
    Number(dateParts[2]),
    Number(dateParts[0]),
    Number(dateParts[1])
  );
  return d;
}

function toEmail(email: string): string {
  const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.match(format)) return email;
  return undefined;
}

function toNumber(num: string): number {
  const forbiddenChars = /[^\d]+/g;
  const matches: RegExpMatchArray = num.match(forbiddenChars);
  if (matches.length > 0) {
    for (const match of matches) {
      num = num.replace(match, "");
    }
    return Number(num);
  }
}
