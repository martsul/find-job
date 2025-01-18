import { ReactNode } from "react";

export type WorkWithCardType = {
  head: ReactNode;
  text: string;
  description: string;
};

export type WorkWithProps = { data: WorkWithCardType[] };
