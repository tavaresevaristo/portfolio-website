import { FC } from "react";
import { SkillsTimelineCardProps } from "./types";

export const SkillsTimelineCard: FC<SkillsTimelineCardProps> = ({
  title,
  icons,
  description,
}) => {
  return (
    <div className="max-w-xl">
      <h3 className="font-mono font-bold text-lg flex items-center gap-3 mb-2">
        {title}
        {icons.map((icon, i) => (
          <span key={i} className="flex gap-2 text-xl">
            {icon}
          </span>
        ))}
      </h3>
      <p className="text-gray-700 font-sans text-sm">{description}</p>
    </div>
  );
};
