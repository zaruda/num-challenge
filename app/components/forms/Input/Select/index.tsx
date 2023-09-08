import { memo, useId } from "react";
import { UseFormReturn } from "react-hook-form";

import { Select as FbSelect, Label } from "flowbite-react";

import { SelectProps } from "./types";

const Component = ({
  name,
  label,
  type = "string",
  register,
  formState: { errors },
  children,
}: SelectProps & UseFormReturn) => {
  const id = useId();
  const error = errors[name]?.message;
  const hasError = !!error;

  return (
    <>
      {label && (
        <Label
          htmlFor={id}
          value={label}
          color={hasError ? "failure" : "gray"}
        />
      )}
      <FbSelect
        id={id}
        color={hasError ? "failure" : "gray"}
        {...register(name, { valueAsNumber: type === "number" })}
      >
        {children}
      </FbSelect>
    </>
  );
};

export const Select = memo(
  Component,
  (prevProps, nextProps) =>
    prevProps.formState.isDirty === nextProps.formState.isDirty,
);

export type { SelectProps };
