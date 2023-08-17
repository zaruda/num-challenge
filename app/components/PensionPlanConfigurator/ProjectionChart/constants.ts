import { PensionPlan } from "@app/domain";

export const DUMMY_PENSION_PLAN = new PensionPlan({
  age: 35,
  retirementAge: 70,
  deposit: 15_000,
  monthlyContribution: 200,
  interestRate: 0.04,
});
