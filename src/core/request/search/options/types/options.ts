import { OutputFields } from "../../../shared/outputFields/types/outputFields";

export type Options = {
  limit?: number;
  offset?: number;
  outputFields?: OutputFields;
  outputFormat?: OutputFormat;
};

export type OutputFormat = "json" | "xml";
