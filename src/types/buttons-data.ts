import { MouseEventHandler, ReactNode } from "react";

type ButtonsDataInfo = {
  size: "big" | "medium" | "small" | "xsmall";
  style: "primary" | "secondary" | "neutral" | "bordered";
  kind: "base" | "svg" | "svground";
  type: "submit" | "button";
  click?: MouseEventHandler<HTMLButtonElement>;
  parameters?:
    | "button"
    | { role: "link"; link: string; activeStyle?: ButtonsDataInfo["style"] };
};

export type ButtonsData = {
  children: ReactNode;
  info: ButtonsDataInfo;
};
