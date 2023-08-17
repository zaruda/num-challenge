import { SelectProps as FbSelectProps } from "flowbite-react";

export type SelectProps = FbSelectProps & {
  name: string;
  label: string;
  type?: "string" | "number";
};
