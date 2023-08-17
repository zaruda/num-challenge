import { Select as FbSelect, Label } from "flowbite-react";
import { useFormContext } from "react-hook-form";

import { SelectProps } from "./types";

export const Select = ({
  name,
  label,
  type = "string",
  children,
}: SelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;
  const hasError = !!error;

  return (
    <>
      {label && (
        <Label
          htmlFor={name}
          value={label}
          color={hasError ? "failure" : "gray"}
        />
      )}
      <FbSelect
        color={hasError ? "failure" : "gray"}
        {...register(name, { valueAsNumber: type === "number" })}
      >
        {children}
      </FbSelect>
    </>
  );
};
