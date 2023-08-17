import { Label, TextInput as FbTextInput } from "flowbite-react";

import { TextInputProps } from "./types";
import { useFormContext } from "react-hook-form";

export const TextInput = ({ name, label, ...rest }: TextInputProps) => {
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
      <FbTextInput
        id={name}
        color={hasError ? "failure" : "gray"}
        helperText={<>{error}</>}
        {...register(name, { valueAsNumber: rest.type === "number" })}
      />
    </>
  );
};
