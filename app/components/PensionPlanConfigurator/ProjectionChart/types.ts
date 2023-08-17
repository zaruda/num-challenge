import { Control, FormState } from "react-hook-form";
import { FormValues } from "../Configurator/types";

export interface ProjectionChartProps {
  control: Control<FormValues>;
  formState: FormState<FormValues>;
}
