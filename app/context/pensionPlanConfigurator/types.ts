import { Dispatch } from "react";
import { PensionPlan } from "@app/domain";

export interface ContextState {
  plans: PensionPlan[];
  addPlan: Dispatch<PensionPlan>;
}
