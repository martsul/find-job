import { MouseEventHandler, ReactNode } from "react";

type ButtonsDataInfo = {
  size: "big" | "medium" | "small" | "xsmall";
  style: "primary" | "secondary" | "neutral" | "bordered";
  kind: "base" | "svg" | "svground";
  type: "submit" | "button";
  click?: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonsData = {
  children: ReactNode;
  info: ButtonsDataInfo;
};
