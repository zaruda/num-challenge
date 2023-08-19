import { memo, useId } from "react";
import { Label, TextInput as FbTextInput } from "flowbite-react";
import { UseFormReturn } from "react-hook-form";

import { TextProps } from "./types";

const Component = ({
  name,
  label,
  register,
  formState: { errors },
  ...rest
}: TextProps & UseFormReturn) => {
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
      <FbTextInput
        id={id}
        color={hasError ? "failure" : "gray"}
        helperText={<>{error}</>}
        {...register(name, { valueAsNumber: rest.type === "number" })}
      />
    </>
  );
};

export const Text = memo(
  Component,
  (prevProps, nextProps) =>
    prevProps.formState.isDirty === nextProps.formState.isDirty,
);

export type { TextProps };
