import { PensionPlansContextProvider } from "@app/context/pensionPlanConfigurator";
import { Configurator } from "./Configurator";
import { ProjectionChart } from "./ProjectionChart";

export const PensionPlanConfigurator = () => (
  <PensionPlansContextProvider>
    <Configurator stateRenderer={ProjectionChart} />
  </PensionPlansContextProvider>
);
