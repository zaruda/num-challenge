"use client";

import { Flowbite } from "flowbite-react";
import { FC, PropsWithChildren } from "react";

export const FlowbiteContext: FC<PropsWithChildren> = ({ children }) => (
  <Flowbite>{children}</Flowbite>
);
