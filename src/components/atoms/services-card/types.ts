import { ReactNode } from "react";

type Item = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type ServicesCardProps = {
  item: Item;
};
