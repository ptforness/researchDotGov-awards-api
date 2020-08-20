export type SearchResponse = {
  raw: RawSearchResponse;
  processed: ProcessedSearchResponse;
};

export type ProcessedSearchResponse = {
  records?: ProcessedRecord[];
  options?: RawOptions;
  serviceNotification?: ProcessedServiceNotification;
};

export type ProcessedRecord = {
  // Agency, Award, Awardee, coPrincipalInvestigator, Options, Performance, PrincipalInvestigator, Program, ProgramOfficer, Publication
  agency?: Agency;
  award?: Award;
  awardee?: Awardee;
  coPrincipalInvestigators?: CoPrincipalInvestigator[];
  performance?: Performance;
  principalInvestigator?: PrincipalInvestigator;
  program?: Program;
  programOfficer?: ProgramOfficer;
  publication?: Publication;
};

export type ProcessedServiceNotification = {
  code?: string;
  message?: string;
  type?: string;
};

export type Agency = {
  name?: string;
};

export type Award = {
  abstract?: string;
  cfdaNumber?: string;
  date?: Date;
  estimatedTotalAmount?: number;
  expirationDate?: Date;
  fundProgram?: string;
  fundsObligatedAmt?: number;
  id?: number;
  primaryProgram?: string;
  projectOutcomesReport?: string;
  startDate?: Date;
  title?: string;
  type?: string;
};

export type Awardee = {
  address?: string;
  city?: string;
  country?: string;
  county?: string;
  district?: string;
  dunsNumber?: number;
  name?: string;
  parentDunsNumber?: number;
  state?: string;
  zipCode?: string;
};

export type CoPrincipalInvestigator = {
  firstName: string;
  lastName: string;
  middleInitial: string;
  name?: string;
};

export type Performance = {
  address?: string;
  city?: string;
  country?: string;
  county?: string;
  district?: string;
  name?: string;
  state?: string;
  zipCode?: number;
};

export type PrincipalInvestigator = {
  email?: string;
  firstName?: string;
  lastName?: string;
  middleInitial?: string;
  name?: string;
  phone?: number;
};

export type Program = {
  awardCode?: string;
  fundingCode?: string;
};

export type ProgramOfficer = {
  email?: string;
  name?: string;
  phone?: number;
};

export type Publication = {
  conference?: string[];
  research?: string[];
};

export type RawSearchResponse = {
  options?: RawOptions;
  records?: RawRecord[];
  serviceNotification?: RawServiceNotification;
};

export type RawRecord = {
  abstractText?: string;
  agency?: string;
  awardAgencyCode?: string;
  awardee?: string;
  awardeeAddress?: string;
  awardeeCity?: string;
  awardeeCountryCode?: string;
  awardeeCounty?: string;
  awardeeDistrictCode?: string;
  awardeeName?: string;
  awardeeStateCode?: string;
  awardeeZipCode?: string;
  cfdaNumber?: string;
  coPDPI?: string[];
  date?: string;
  dunsNumber?: string;
  estimatedTotalAmt?: string;
  expDate?: string;
  fundAgencyCode?: string;
  fundProgramName?: string;
  fundsObligatedAmt?: string;
  id?: string;
  parentDunsNumber?: string;
  pdPIName?: string;
  perfAddress?: string;
  perfCity?: string;
  perfCountryCode?: string;
  perfCounty?: string;
  perfDistrictCode?: string;
  perfLocation?: string;
  perfStateCode?: string;
  perfZipCode?: string;
  piEmail?: string;
  piFirstName?: string;
  piLastName?: string;
  piMiddleInitial: string;
  piPhone?: string;
  poEmail?: string;
  poName?: string;
  poPhone?: string;
  primaryProgram?: string;
  projectOutComesReport?: string;
  publicationConference?: string[];
  publicationResearch?: string[];
  startDate?: string;
  title?: string;
  transType?: string;
};

export type RawOptions = {
  rpp?: number;
  offset?: number;
};

export type RawServiceNotification = {
  notificationType?: string;
  notificationCode?: string;
  notificationMessage?: string;
};
