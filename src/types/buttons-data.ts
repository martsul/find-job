import { MouseEventHandler, ReactNode } from "react";

export type ButtonsData = {
  children: ReactNode;
  info: {
    size: "big" | "medium" | "small" | "xsmall";
    style: "primary" | "secondary" | "neutral" | "bordered";
    type: "base" | "svg" | "svground";
    click: MouseEventHandler<HTMLButtonElement>;
  };
};
