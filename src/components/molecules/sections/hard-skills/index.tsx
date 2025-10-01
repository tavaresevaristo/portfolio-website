import { skillsData } from "@/constants/skills.data";
import { SkillsTimelineCard } from "@/components/atoms/skills-timeline-card";

export const SkillsTimeline = () => {
  return (
    <section id="skills" className="container mx-auto my-20 px-6 max-w-4xl">
      <h2
        className="text-2xl lg:text-3xl font-bold 
            lg:font-extrabold font-mono text-center mb-10"
      >
        Skills Growth
      </h2>

      <div className="space-y-8 border-l border-gray-300 pl-6">
        {skillsData.map((skill, index) => (
          <SkillsTimelineCard
            key={index}
            title={skill.title}
            icons={skill.icons}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};
