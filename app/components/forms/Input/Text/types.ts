import { TextInputProps as FbTextInputProps } from "flowbite-react";

export type TextProps = FbTextInputProps & {
  name: string;
  label?: string;
};
