import { FC } from "react";
import { ServicesCardProps } from "./types";

export const ServicesCard: FC<ServicesCardProps> = ({
  item: { title, description, icon },
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-mono font-bold text-lg">{title}</h3>
        <p className="font-sans text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};
