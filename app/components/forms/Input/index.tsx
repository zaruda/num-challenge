import { useFormContext } from "react-hook-form";
import { Text, TextProps } from "./Text";
import { Select, SelectProps } from "./Select";

export function Input<TProps extends { component: any }>({
  component: Component,
  ...props
}: TProps) {
  const methods = useFormContext();

  if (!Component) {
    return null;
  }

  return <Component {...methods} {...props} />;
}

Input.Text = (props: TextProps) => <Input component={Text} {...props} />;
Input.Select = (props: SelectProps) => <Input component={Select} {...props} />;
