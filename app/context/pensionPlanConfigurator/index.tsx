"use client";

import { PensionPlan } from "@app/domain";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { ContextState } from "./types";

const PensionPlansContext = createContext<ContextState>({
  plans: [],
  addPlan: () => {},
});

/**
 * Pension plan context is a data storage for the data submitted from pension plan configurator form
 */
export const PensionPlansContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [plans, setPlans] = useState<PensionPlan[]>([]);

  const addPlan = (plan: PensionPlan) =>
    setPlans((prevState) => [...prevState, plan]);

  console.warn("Saved plans", plans);

  return (
    <PensionPlansContext.Provider value={{ plans, addPlan }}>
      {children}
    </PensionPlansContext.Provider>
  );
};

export const usePensionPlansContext = () => useContext(PensionPlansContext);
