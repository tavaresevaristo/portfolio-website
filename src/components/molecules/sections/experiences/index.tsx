import Image from "next/image";
import { workExperiences } from "@/constants/work-experiences.data";

export const ExperienceLinkedIn = () => {
  return (
    <section id="experience" className="container mx-auto px-6 py-20 max-w-5xl">
      <h2 className="text-2xl lg:text-3xl font-bold lg:font-extrabold font-mono text-center mb-12">
        Work Experiences
      </h2>
      <div className="space-y-8">
        {workExperiences.map((exp, i) => (
          <div key={i} className="flex gap-6 items-start font-sans">
            <div className="w-10 h-10 lg:w-16 lg:h-16 relative flex-shrink-0">
              <Image
                src={exp.logo}
                alt={exp.company}
                fill
                className="object-contain"
              />
            </div>
            <div className="max-w-3xl">
              <h3 className="font-mono font-bold text-lg">{exp.role}</h3>
              <p className="text-gray-600 text-sm">
                {exp.company} · {exp.period} · {exp.location}
              </p>
              <p className="text-gray-700 mt-2 text-xs lg:text-sm text-start lg:text-justify">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
