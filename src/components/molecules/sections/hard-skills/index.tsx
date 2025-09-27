import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiGraphql,
  SiDotnet,
  SiTailwindcss,
  SiFigma,
  SiExpo,
  SiAnsible,
  SiNginx,
  SiApache,
} from "react-icons/si";

export const SkillsTimeline = () => {
  return (
    <section id="skills" className="container mx-auto my-20 px-6 max-w-4xl">
      <h2 className="text-3xl font-bold lg:font-extrabold font-mono text-center mb-10">
        Skills Growth
      </h2>

      <div className="space-y-8 border-l border-gray-300 pl-6">
        {/* Frontend */}
        <div className="max-w-xl">
          <h3 className="font-mono font-bold text-lg flex items-center gap-3  mb-2">
            Frontend
            <span className="flex gap-2 text-xl">
              <FaReact className="text-sky-500" />
              <SiNextdotjs className="text-black" />
              <SiTypescript className="text-blue-600" />
              <SiTailwindcss className="text-sky-400" />
            </span>
          </h3>
          <p className="text-gray-700 font-sans text-sm">
            Modern, scalable interfaces with React, Next.js, TypeScript, and
            TailwindCSS, with a focus on usability and performance.
          </p>
        </div>

        {/* Mobile */}
        <div className="max-w-xl">
          <h3 className="font-mono font-bold text-lg flex items-center gap-3 mb-2">
            Mobile
            <span className="flex gap-2 text-xl">
              <FaReact className="text-sky-500" />
              <SiExpo className="text-black" />
              <FaAndroid className="text-green-600" />
              <FaApple className="text-gray-800" />
            </span>
          </h3>
          <p className="text-gray-700 font-sans text-sm">
            Cross-platform mobile development with React Native and Expo,
            integrating native features for Android and iOS.
          </p>
        </div>

        {/* Backend */}
        <div className="max-w-xl">
          <h3 className="font-mono font-bold text-lg flex items-center gap-3 mb-2">
            Backend
            <span className="flex gap-2 text-xl">
              <FaNodeJs className="text-green-600" />
              <SiNestjs className="text-red-600" />
              <SiGraphql className="text-pink-500" />
              <SiDotnet className="text-purple-700" />
            </span>
          </h3>
          <p className="text-gray-700 font-sans text-sm">
            Building scalable APIs with Node.js, NestJS, GraphQL, and C# like
            .NET, applying Clean Architecture and best practices.
          </p>
        </div>

        {/* Databases */}
        <div className="max-w-xl">
          <h3 className="font-mono font-bold text-lg flex items-center gap-3 mb-2">
            Databases
            <span className="flex gap-2 text-xl">
              <SiPostgresql className="text-sky-700" />
              <SiMongodb className="text-green-700" />
              <SiRedis className="text-red-500" />
            </span>
          </h3>
          <p className="text-gray-700 font-sans text-sm">
            Experience with SQL and NoSQL databases such as PostgreSQL, MongoDB,
            and Redis, including optimization and caching.
          </p>
        </div>

        {/* Cloud & DevOps */}
        <div className="max-w-xl">
          <h3 className="font-mono font-bold text-lg flex items-center gap-3 mb-2">
            Cloud & DevOps
            <span className="flex gap-2 text-xl">
              <FaDocker className="text-blue-500" />
              <SiFirebase className="text-yellow-500" />
              <SiAnsible className="text-red-600" />
              <SiNginx className="text-green-600" />
              <SiApache className="text-orange-600" />
            </span>
          </h3>
          <p className="text-gray-700 font-sans text-sm">
            Deployments with Docker, CI/CD, Ansible, and server management with
            NGINX and Apache. Quick integrations with Firebase.
          </p>
        </div>

        {/* Tools */}
        <div className="max-w-xl">
          <h3 className="font-mono font-bold text-lg flex items-center gap-3 mb-2">
            Tools
            <span className="flex gap-2 text-xl">
              <FaGithub className="text-gray-800" />
              <SiFigma className="text-purple-500" />
            </span>
          </h3>
          <p className="text-gray-700 font-sans text-sm font-sans text-sm">
            Versioning with Git/GitHub and UI/UX collaboration through Figma.
          </p>
        </div>
      </div>
    </section>
  );
};
