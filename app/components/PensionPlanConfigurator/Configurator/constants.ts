import * as z from "zod";
import { Field, InterestRate } from "./types";

export const INTEREST_RATES = [0.02, 0.04, 0.06];

// TODO: Usually its solved by i18n
export const INTEREST_RATE_TO_LABEL: Record<InterestRate, string> = {
  [InterestRate.Conservative]: "Conservative",
  [InterestRate.Moderate]: "Moderate",
  [InterestRate.Aggressive]: "Aggressive",
};

// TODO: Add error messages
// TODO: Improve validations to make cross-field validations
export const validationSchema = z.object({
  [Field.Deposit]: z.number().min(100),
  [Field.MonthlyContribution]: z.number().min(10),
  [Field.RetirementAge]: z.number().min(62, "Minimum 62").max(75),
  [Field.Age]: z.number().min(18).max(60),
  [Field.InterestRate]: z.number(),
});
