import { ReactNode } from "react";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

export interface FormProps<TValues extends FieldValues> {
  className?: string;
  onSubmit: SubmitHandler<TValues>;
  children: ReactNode;
  form: UseFormReturn<TValues>;
}
