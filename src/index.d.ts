declare module "types" {
  export type Validator = (...args: any[]) => boolean;
}
declare module "core/request/shared/parameter" {
  import { Validator } from "types";
  export class Parameter<T> {
    prefix: string;
    value: T;
    isValid: Validator;
    constructor(init?: Partial<Parameter<T>>);
    toString(): string;
  }
}
declare module "core/request/search/parameters/types/agency" {
  export type Agency = {
    name?: Name;
  };
  export type Name = "NASA" | "NSF";
}
declare module "core/request/search/parameters/builders/agencyBuilder" {
  import { Agency, Name } from "core/request/search/parameters/types/agency";
  export class AgencyBuilder implements Agency {
    constructor(init?: Agency);
    private _name;
    get name(): Name;
    set name(value: Name);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/search/parameters/builders/util/dateRange" {
  import { Parameter } from "core/request/shared/parameter";
  export class DateRange {
    constructor(start: Parameter<Date>, end: Parameter<Date>);
    private _end;
    private _start;
    get end(): Date;
    set end(value: Date);
    get start(): Date;
    set start(value: Date);
    clean(): boolean;
    isValid(): boolean;
    build(): string[];
  }
}
declare module "core/request/search/parameters/types/award" {
  export type Award = {
    cfdaNumber?: string;
    coPrincipalInvestigator?: string;
    fundsObligatedFrom?: number;
    fundsObligatedTo?: number;
    id?: string;
    principalInvestigator?: string;
    projectOutcomesOnly?: boolean;
    recoveryActOnly?: boolean;
    totalAmtFrom?: number;
    totalAmtTo?: number;
    type?: AwardType;
  };
  export type AwardType = "Grant" | "coopagrmnt" | "Other";
}
declare module "core/request/search/parameters/builders/awardBuilder" {
  import { Award, AwardType } from "core/request/search/parameters/types/award";
  export class AwardBuilder implements Award {
    constructor(init?: Award);
    private _cfdaNumber;
    private _coPrincipalInvestigator;
    private _dateRange;
    private _expirationDateRange;
    private _fundsObligatedFrom;
    private _fundsObligatedTo;
    private _id;
    private _principalInvestigator;
    private _projectOutcomesOnly;
    private _recoveryActOnly;
    private _startDateRange;
    private _totalAmountFrom;
    private _totalAmountTo;
    private _type;
    get cfdaNumber(): string;
    set cfdaNumber(value: string);
    get coPrincipalInvestigator(): string;
    set coPrincipalInvestigator(value: string);
    get dateEnd(): Date;
    set dateEnd(value: Date);
    get dateStart(): Date;
    set dateStart(value: Date);
    get expirationDateEnd(): Date;
    set expirationDateEnd(value: Date);
    get expirationDateStart(): Date;
    set expirationDateStart(value: Date);
    get fundsObligatedFrom(): number;
    set fundsObligatedFrom(value: number);
    get fundsObligatedTo(): number;
    set fundsObligatedTo(value: number);
    get id(): string;
    set id(value: string);
    get principalInvestigator(): string;
    set principalInvestigator(value: string);
    get projectOutcomesOnly(): boolean;
    set projectOutcomesOnly(value: boolean);
    get recoveryActOnly(): boolean;
    set recoveryActOnly(value: boolean);
    get startDateEnd(): Date;
    set startDateEnd(value: Date);
    get startDateStart(): Date;
    set startDateStart(value: Date);
    get totalAmountFrom(): number;
    set totalAmountFrom(value: number);
    get totalAmountTo(): number;
    set totalAmountTo(value: number);
    get type(): AwardType;
    set type(value: AwardType);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/search/parameters/validators/location" {
  import { Validator } from "types";
  export class LocationValidator {
    static readonly congressionalDistrict: Validator;
    static readonly country: Validator;
    static readonly state: Validator;
    static readonly zip: Validator;
  }
}
declare module "core/request/search/parameters/types/awardee" {
  export type Awardee = {
    city?: string;
    country?: string;
    county?: string;
    district?: string;
    name?: string;
    state?: string;
    zip?: string;
  };
}
declare module "core/request/search/parameters/builders/awardeeBuilder" {
  import { Awardee } from "core/request/search/parameters/types/awardee";
  export class AwardeeBuilder implements Awardee {
    constructor(init?: Awardee);
    private _city;
    private _country;
    private _county;
    private _district;
    private _name;
    private _state;
    private _zip;
    get city(): string;
    set city(value: string);
    get country(): string;
    set country(value: string);
    get county(): string;
    set county(value: string);
    get district(): string;
    set district(value: string);
    get name(): string;
    set name(value: string);
    get state(): string;
    set state(value: string);
    get zip(): string;
    set zip(value: string);
    isValid(): boolean;
    build(): string[];
  }
}
declare module "core/request/search/parameters/types/coPrincipalInvestigator" {
  export type CoPrincipalInvestigator = {
    name?: string;
  };
}
declare module "core/request/search/parameters/builders/coPrincipalInvestigatorBuilder" {
  import { CoPrincipalInvestigator } from "core/request/search/parameters/types/coPrincipalInvestigator";
  export class CoPrincipalInvestigatorBuilder
    implements CoPrincipalInvestigator {
    constructor(init?: CoPrincipalInvestigator);
    private _name;
    get name(): string;
    set name(value: string);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/search/parameters/types/performance" {
  export type Performance = {
    city?: string;
    country?: string;
    county?: string;
    district?: string;
    name?: string;
    state?: string;
    zip?: string;
  };
}
declare module "core/request/search/parameters/builders/performanceBuilder" {
  import { Performance } from "core/request/search/parameters/types/performance";
  export class PerformanceBuilder implements Performance {
    constructor(init?: Performance);
    private _city;
    private _country;
    private _county;
    private _district;
    private _name;
    private _state;
    private _zip;
    get city(): string;
    set city(value: string);
    get country(): string;
    set country(value: string);
    get county(): string;
    set county(value: string);
    get district(): string;
    set district(value: string);
    get name(): string;
    set name(value: string);
    get state(): string;
    set state(value: string);
    get zip(): string;
    set zip(value: string);
    isValid(): boolean;
    build(): string[];
  }
}
declare module "core/request/search/parameters/types/principalInvestigator" {
  export type PrincipalInvestigator = {
    name?: string;
  };
}
declare module "core/request/search/parameters/builders/principalInvestigatorBuilder" {
  import { PrincipalInvestigator } from "core/request/search/parameters/types/principalInvestigator";
  export class PrincipalInvestigatorBuilder implements PrincipalInvestigator {
    constructor(init?: PrincipalInvestigator);
    private _name;
    get name(): string;
    set name(value: string);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/search/parameters/types/programOfficer" {
  export type ProgramOfficer = {
    name?: string;
  };
}
declare module "core/request/search/parameters/builders/programOfficerBuilder" {
  import { ProgramOfficer } from "core/request/search/parameters/types/programOfficer";
  export class ProgramOfficerBuilder implements ProgramOfficer {
    constructor(init?: ProgramOfficer);
    private _name;
    get name(): string;
    set name(value: string);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/search/parameters/types/parameters" {
  import { Agency } from "core/request/search/parameters/types/agency";
  import { Award } from "core/request/search/parameters/types/award";
  import { Awardee } from "core/request/search/parameters/types/awardee";
  import { CoPrincipalInvestigator } from "core/request/search/parameters/types/coPrincipalInvestigator";
  import { Performance } from "core/request/search/parameters/types/performance";
  import { PrincipalInvestigator } from "core/request/search/parameters/types/principalInvestigator";
  import { ProgramOfficer } from "core/request/search/parameters/types/programOfficer";
  export type Parameters = {
    agency?: Agency;
    award?: Award;
    awardee?: Awardee;
    coPrincipalInvestigator?: CoPrincipalInvestigator;
    performance?: Performance;
    principalInvestigator?: PrincipalInvestigator;
    programOfficer?: ProgramOfficer;
  };
  export type {
    Agency,
    Award,
    Awardee,
    CoPrincipalInvestigator,
    Performance,
    PrincipalInvestigator,
    ProgramOfficer,
  };
}
declare module "core/request/search/parameters/builders/parametersBuilder" {
  import { Agency } from "core/request/search/parameters/types/agency";
  import { Award } from "core/request/search/parameters/types/award";
  import { Awardee } from "core/request/search/parameters/types/awardee";
  import { CoPrincipalInvestigator } from "core/request/search/parameters/types/coPrincipalInvestigator";
  import { Performance } from "core/request/search/parameters/types/performance";
  import { PrincipalInvestigator } from "core/request/search/parameters/types/principalInvestigator";
  import { ProgramOfficer } from "core/request/search/parameters/types/programOfficer";
  import { Parameters } from "core/request/search/parameters/types/parameters";
  export class ParametersBuilder {
    constructor(init?: Parameters);
    private _agencyBuilder;
    private _awardBuilder;
    private _awardeeBuilder;
    private _coPrincipalInvestigatorBuilder;
    private _performanceBuilder;
    private _principalInvestigatorBuilder;
    private _programOfficerBuilder;
    agency?: Agency;
    award?: Award;
    awardee?: Awardee;
    coPrincipalInvestigator?: CoPrincipalInvestigator;
    performance?: Performance;
    principalInvestigator?: PrincipalInvestigator;
    programOfficer?: ProgramOfficer;
    isValid(): boolean;
    build(): string[];
  }
}
declare module "core/request/search/options/validators/options" {
  import { Validator } from "types";
  export class OptionsValidator {
    static readonly limit: Validator;
    static readonly offset: Validator;
  }
}
declare module "core/request/shared/outputFields/agency" {
  export type AgencyField = "name";
  export class Agency {
    constructor(...init: AgencyField[]);
    private _name;
    get name(): boolean;
    set name(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/award" {
  export type AwardField =
    | "abstract"
    | "cfdaNumber"
    | "date"
    | "estimatedTotalAmount"
    | "expirationDate"
    | "fundProgram"
    | "fundsObligatedAmount"
    | "id"
    | "primaryProgram"
    | "projectOutcomesReport"
    | "startDate"
    | "title"
    | "type";
  export class Award {
    constructor(...init: Array<AwardField>);
    private _abstract;
    private _cfdaNumber;
    private _date;
    private _estimatedTotalAmount;
    private _expirationDate;
    private _fundProgram;
    private _fundsObligatedAmount;
    private _id;
    private _primaryProgram;
    private _projectOutcomesReport;
    private _startDate;
    private _title;
    private _type;
    get abstract(): boolean;
    set abstract(value: boolean);
    get cfdaNumber(): boolean;
    set cfdaNumber(value: boolean);
    get date(): boolean;
    set date(value: boolean);
    get estimatedTotalAmount(): boolean;
    set estimatedTotalAmount(value: boolean);
    get expirationDate(): boolean;
    set expirationDate(value: boolean);
    get fundProgram(): boolean;
    set fundProgram(value: boolean);
    get fundsObligatedAmount(): boolean;
    set fundsObligatedAmount(value: boolean);
    get id(): boolean;
    set id(value: boolean);
    get primaryProgram(): boolean;
    set primaryProgram(value: boolean);
    get projectOutcomesReport(): boolean;
    set projectOutcomesReport(value: boolean);
    get startDate(): boolean;
    set startDate(value: boolean);
    get title(): boolean;
    set title(value: boolean);
    get type(): boolean;
    set type(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/awardee" {
  export type AwardeeField =
    | "address"
    | "city"
    | "country"
    | "county"
    | "district"
    | "dunsNumber"
    | "name"
    | "parentDunsNumber"
    | "state"
    | "zipCode";
  export class Awardee {
    constructor(...init: Array<AwardeeField>);
    private _address;
    private _city;
    private _country;
    private _county;
    private _district;
    private _dunsNumber;
    private _name;
    private _parentDunsNumber;
    private _state;
    private _zipCode;
    get address(): boolean;
    set address(value: boolean);
    get city(): boolean;
    set city(value: boolean);
    get country(): boolean;
    set country(value: boolean);
    get county(): boolean;
    set county(value: boolean);
    get district(): boolean;
    set district(value: boolean);
    get dunsNumber(): boolean;
    set dunsNumber(value: boolean);
    get name(): boolean;
    set name(value: boolean);
    get parentDunsNumber(): boolean;
    set parentDunsNumber(value: boolean);
    get state(): boolean;
    set state(value: boolean);
    get zipCode(): boolean;
    set zipCode(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/coPrincipalInvestigator" {
  export type CoPrincipalInvestigatorField = "name";
  export class CoPrincipalInvestigator {
    constructor(...init: Array<CoPrincipalInvestigatorField>);
    private _name;
    get name(): boolean;
    set name(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/options" {
  export type OptionsField = "limit" | "offset";
  export class Options {
    constructor(...init: Array<OptionsField>);
    private _limit;
    private _offset;
    get limit(): boolean;
    set limit(value: boolean);
    get offset(): boolean;
    set offset(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/performance" {
  export type PerformanceField =
    | "address"
    | "city"
    | "country"
    | "county"
    | "district"
    | "name"
    | "state"
    | "zipCode";
  export class Performance {
    constructor(...init: Array<PerformanceField>);
    private _address;
    private _city;
    private _country;
    private _county;
    private _district;
    private _name;
    private _state;
    private _zipCode;
    get address(): boolean;
    set address(value: boolean);
    get city(): boolean;
    set city(value: boolean);
    get country(): boolean;
    set country(value: boolean);
    get county(): boolean;
    set county(value: boolean);
    get district(): boolean;
    set district(value: boolean);
    get name(): boolean;
    set name(value: boolean);
    get state(): boolean;
    set state(value: boolean);
    get zipCode(): boolean;
    set zipCode(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/principalInvestigator" {
  export type PrincipalInvestigatorField =
    | "email"
    | "firstName"
    | "lastName"
    | "middleInitial"
    | "name"
    | "phone";
  export class PrincipalInvestigator {
    constructor(...init: Array<PrincipalInvestigatorField>);
    private _email;
    private _firstName;
    private _lastName;
    private _middleInitial;
    private _name;
    private _phone;
    get email(): boolean;
    set email(value: boolean);
    get firstName(): boolean;
    set firstName(value: boolean);
    get lastName(): boolean;
    set lastName(value: boolean);
    get middleInitial(): boolean;
    set middleInitial(value: boolean);
    get name(): boolean;
    set name(value: boolean);
    get phone(): boolean;
    set phone(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/program" {
  export type ProgramField = "awardCode" | "fundingCode";
  export class Program {
    constructor(...init: Array<ProgramField>);
    private _awardCode;
    private _fundingCode;
    get awardCode(): boolean;
    set awardCode(value: boolean);
    get fundingCode(): boolean;
    set fundingCode(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/programOfficer" {
  export type ProgramOfficerField = "email" | "name" | "phone";
  export class ProgramOfficer {
    constructor(...init: Array<ProgramOfficerField>);
    private _email;
    private _name;
    private _phone;
    get email(): boolean;
    set email(value: boolean);
    get name(): boolean;
    set name(value: boolean);
    get phone(): boolean;
    set phone(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/publication" {
  export type PublicationField = "conference" | "research";
  export class Publication {
    constructor(...init: Array<PublicationField>);
    private _conference;
    private _research;
    get conference(): boolean;
    set conference(value: boolean);
    get research(): boolean;
    set research(value: boolean);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/shared/outputFields/default" {
  import { OutputFieldsBuilder } from "core/request/shared/outputFields/index";
  export function getDefaultOutputFields(): OutputFieldsBuilder;
}
declare module "core/request/shared/outputFields/types/outputFields" {
  import { AgencyField } from "core/request/shared/outputFields/agency";
  import { AwardField } from "core/request/shared/outputFields/award";
  import { AwardeeField } from "core/request/shared/outputFields/awardee";
  import { CoPrincipalInvestigatorField } from "core/request/shared/outputFields/coPrincipalInvestigator";
  import { OptionsField } from "core/request/shared/outputFields/options";
  import { PerformanceField } from "core/request/shared/outputFields/performance";
  import { PrincipalInvestigatorField } from "core/request/shared/outputFields/principalInvestigator";
  import { ProgramField } from "core/request/shared/outputFields/program";
  import { ProgramOfficerField } from "core/request/shared/outputFields/programOfficer";
  import { PublicationField } from "core/request/shared/outputFields/publication";
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
}
declare module "core/request/shared/outputFields/index" {
  import { AgencyField } from "core/request/shared/outputFields/agency";
  import { AwardField } from "core/request/shared/outputFields/award";
  import { AwardeeField } from "core/request/shared/outputFields/awardee";
  import { CoPrincipalInvestigatorField } from "core/request/shared/outputFields/coPrincipalInvestigator";
  import { OptionsField } from "core/request/shared/outputFields/options";
  import { PerformanceField } from "core/request/shared/outputFields/performance";
  import { PrincipalInvestigatorField } from "core/request/shared/outputFields/principalInvestigator";
  import { ProgramField } from "core/request/shared/outputFields/program";
  import { ProgramOfficerField } from "core/request/shared/outputFields/programOfficer";
  import { PublicationField } from "core/request/shared/outputFields/publication";
  import { OutputFields } from "core/request/shared/outputFields/types/outputFields";
  export class OutputFieldsBuilder implements OutputFields {
    constructor(init?: OutputFields);
    private _agency;
    private _award;
    private _awardee;
    private _coPrincipalInvestigator;
    private _options;
    private _performance;
    private _principalInvestigator;
    private _program;
    private _programOfficer;
    private _publication;
    set agency(fields: AgencyField[]);
    set award(fields: AwardField[]);
    set awardee(fields: AwardeeField[]);
    set coPrincipalInvestigator(fields: CoPrincipalInvestigatorField[]);
    set options(fields: OptionsField[]);
    set performance(fields: PerformanceField[]);
    set principalInvestigator(fields: PrincipalInvestigatorField[]);
    set program(fields: ProgramField[]);
    set programOfficer(fields: ProgramOfficerField[]);
    set publication(fields: PublicationField[]);
    build(): string[];
    reset(): void;
  }
}
declare module "core/request/search/options/types/options" {
  import { OutputFields } from "core/request/shared/outputFields/types/outputFields";
  export type Options = {
    limit?: number;
    offset?: number;
    outputFields?: OutputFields;
    outputFormat?: OutputFormat;
  };
  export type OutputFormat = "json" | "xml";
}
declare module "core/request/search/options/builders/optionsBuilder" {
  import {
    Options,
    OutputFormat,
  } from "core/request/search/options/types/options";
  import { OutputFields } from "core/request/shared/outputFields/types/outputFields";
  export class OptionsBuilder implements Options {
    constructor(init?: Options);
    private _limit;
    private _offset;
    private _outputFormat;
    private _outputFieldsBuilder;
    outputFields: OutputFields;
    get limit(): number;
    set limit(value: number);
    get offset(): number;
    set offset(value: number);
    get outputFormat(): OutputFormat;
    set outputFormat(value: OutputFormat);
    isValid(): boolean;
    build(): string[];
  }
}
declare module "core/request/search/index" {
  import {
    Parameters,
    Agency,
    Award,
    Awardee,
    CoPrincipalInvestigator,
    Performance,
    PrincipalInvestigator,
    ProgramOfficer,
  } from "core/request/search/parameters/types/parameters";
  import { Options } from "core/request/search/options/types/options";
  export class Search {
    constructor(init?: Partial<Search>);
    private _host;
    private _protocol;
    private _pathname;
    private _format;
    private _optionsBuilder;
    private _parametersBuilder;
    parameters: Parameters;
    options: Options;
    execute(): void;
  }
  export {
    Parameters,
    Agency,
    Award,
    Awardee,
    CoPrincipalInvestigator,
    Performance,
    PrincipalInvestigator,
    ProgramOfficer,
  };
}
declare module "index" {
  export {
    Search,
    Agency,
    Award,
    Awardee,
    CoPrincipalInvestigator,
    Performance,
    PrincipalInvestigator,
    ProgramOfficer,
  } from "core/request/search/index";
}
declare module "test" {}
declare module "core/response/types/search" {
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
}
declare module "core/response/index" {}
