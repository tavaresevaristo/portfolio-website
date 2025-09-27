1 - ABOUT SECTION OPTION 1

import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="container mx-auto my-20 px-6 flex flex-col lg:flex-row gap-20 items-center m-auto">
      <div className="w-full lg:w-1/4 h-100 relative">
        <Image
          fill
          alt="Tavares Evaristo"
          src="/about/image-1.jpeg"
          className="object-cover"
        />
      </div>

      <div className="flex-1 text-center lg:text-left  max-w-xl bg-red-100">
        <h2 className="text-3xl font-bold font-mono text-gray-900 mb-4">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed">
          I’m Tavares Evaristo, a Senior Software Engineer passionate about
          building scalable, impactful, and reliable systems. Over the years,
          I’ve contributed to projects ranging from startups to enterprise
          solutions, always focusing on delivering value through code.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Outside of coding, I enjoy mentoring developers, writing about tech,
          and exploring how technology can empower businesses.
        </p>
      </div>
    </section>
  );
};







2 - ABOUT SECTION OPTION 2



export const AboutSection = () => {
  return (
    <section className="container mx-auto my-20 px-6 max-w-3xl text-center lg:text-left">
      <h2 className="text-3xl font-bold font-mono text-gray-900 mb-6">
        About Me
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        I’m a Senior Software Engineer with a passion for turning complex
        problems into simple, elegant solutions. My mission is to create
        software that drives business growth and empowers people.
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm font-mono text-gray-800">
        <span>✔ Full-Stack Development</span>
        <span>✔ Scalable Architecture</span>
        <span>✔ Cloud & DevOps</span>
        <span>✔ Mentorship & Leadership</span>
      </div>
    </section>
  );
};



4: SKILL CARROSSEL

"use client";

import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiNestjs,
  SiRedis,
  SiFirebase,
  SiGraphql,
  SiFigma,
  SiMysql,
} from "react-icons/si";

export const SkillsCarousel = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += scrollStep;
      scrollAmount += scrollStep;

      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-20 px-6">
      <h2 className="text-3xl font-bold font-mono text-center mb-10">
        Tech Stack
      </h2>
      <div
        ref={containerRef}
        className="flex overflow-x-hidden space-x-12 text-5xl"
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center h-full justify-center min-w-[120px] hover:scale-110 hover:text-black transition"
          >
            {skill.icon}
            <p className="text-xs font-mono mt-2 select-none">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

