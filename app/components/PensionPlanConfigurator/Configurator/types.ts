import { ReactNode } from "react";
import { Control, FormState } from "react-hook-form";
import * as z from "zod";
import { validationSchema } from "./constants";

export enum Field {
  Deposit = "deposit",
  MonthlyContribution = "monthlyContribution",
  RetirementAge = "retirementAge",
  Age = "age",
  InterestRate = "interestRate",
}

export enum InterestRate {
  Conservative = 0.02,
  Moderate = 0.04,
  Aggressive = 0.06,
}

export type FormValues = z.infer<typeof validationSchema>;

type StateRendererProps = {
  control: Control<FormValues>;
  formState: FormState<FormValues>;
};

export interface ConfiguratorProps {
  stateRenderer?: (props: StateRendererProps) => ReactNode;
}
