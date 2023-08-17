import { FieldValues, FormProvider } from "react-hook-form";
import { FormProps } from "./types";

export function Form<TValues extends FieldValues>({
  className,
  onSubmit,
  children,
  form,
}: FormProps<TValues>) {
  return (
    <FormProvider {...form}>
      <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
