export type Award = {
  cfdaNumber?: string;
  coPrincipalInvestigator?: string;
  //dateRange?: ??
  //expirationDateRange?: ??
  fundsObligatedFrom?: number;
  fundsObligatedTo?: number;
  id?: string;
  principalInvestigator?: string;
  projectOutcomesOnly?: boolean;
  recoveryActOnly?: boolean;
  //startDateRange?: ??
  totalAmtFrom?: number;
  totalAmtTo?: number;
  type?: AwardType;
};

/**
 * A list of Award types covered by this API.
 * @type
 */
export type AwardType = "Grant" | "coopagrmnt" | "Other";
