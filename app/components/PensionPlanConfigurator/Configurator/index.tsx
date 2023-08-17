import { Button } from "flowbite-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePensionPlansContext } from "@app/context";
import { PensionPlan } from "@app/domain";
import { TextInput, Select, Form } from "@app/components/forms";

import { INTEREST_RATE_TO_LABEL, validationSchema } from "./constants";
import { FormValues, ConfiguratorProps, Field, InterestRate } from "./types";

export const Configurator = ({ stateRenderer }: ConfiguratorProps) => {
  const { addPlan } = usePensionPlansContext();

  const form = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      [Field.Deposit]: 10_000,
      [Field.MonthlyContribution]: 100,
      [Field.InterestRate]: InterestRate.Moderate,
    },
    resolver: zodResolver(validationSchema),
  });

  // Despite of the fact that in this example FormValues and PensionPlan has the same fields
  // I decided to split it into separate types since in real-world example such case is rare
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    addPlan(new PensionPlan(data));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Form<FormValues>
        className="flex flex-col gap-4"
        form={form}
        onSubmit={onSubmit}
      >
        <div className="mb-2 block">
          <TextInput
            name={Field.Deposit}
            label="Deposit"
            type="number"
            addon="€"
          />
        </div>

        <div className="mb-2 block">
          <TextInput
            name={Field.MonthlyContribution}
            label="Monthly contribution"
            type="number"
            addon="€"
          />
        </div>

        <div className="mb-2 block">
          <TextInput
            name={Field.RetirementAge}
            label="Desired retirement age"
            type="number"
            color="failure"
          />
        </div>

        <div className="mb-2 block">
          <TextInput name={Field.Age} label="Current age" type="number" />
        </div>

        <div className="mb-2 block">
          <Select name={Field.InterestRate} label="Risk level" type="number">
            {Object.entries(INTEREST_RATE_TO_LABEL).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </Select>
        </div>

        <Button type="submit" disabled={!form.formState.isValid}>
          Submit
        </Button>
      </Form>
      {stateRenderer?.({ control: form.control, formState: form.formState })}
    </div>
  );
};
