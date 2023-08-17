import { TextInputProps as FbTextInputProps } from "flowbite-react";
export type TextInputProps = FbTextInputProps & {
  name: string;
  label?: string;
};
