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

export const skillsData = [
  {
    title: "Frontend",
    icons: [
      <FaReact className="text-sky-500" key="react" />,
      <SiNextdotjs className="text-black" key="next" />,
      <SiTypescript className="text-blue-600" key="ts" />,
      <SiTailwindcss className="text-sky-400" key="tailwind" />,
    ],
    description:
      "Modern, scalable interfaces with React, Next.js, TypeScript, and TailwindCSS, with a focus on usability and performance.",
  },
  {
    title: "Mobile",
    icons: [
      <FaReact className="text-sky-500" key="rn" />,
      <SiExpo className="text-black" key="expo" />,
      <FaAndroid className="text-green-600" key="android" />,
      <FaApple className="text-gray-800" key="ios" />,
    ],
    description:
      "Cross-platform mobile development with React Native and Expo, integrating native features for Android and iOS.",
  },
  {
    title: "Backend",
    icons: [
      <FaNodeJs className="text-green-600" key="node" />,
      <SiNestjs className="text-red-600" key="nestjs" />,
      <SiGraphql className="text-pink-500" key="graphql" />,
      <SiDotnet className="text-purple-700" key="dotnet" />,
    ],
    description:
      "Building scalable APIs with Node.js, NestJS, GraphQL, and C# (.NET), applying Clean Architecture and best practices.",
  },
  {
    title: "Databases",
    icons: [
      <SiPostgresql className="text-sky-700" key="pg" />,
      <SiMongodb className="text-green-700" key="mongo" />,
      <SiRedis className="text-red-500" key="redis" />,
    ],
    description:
      "Experience with SQL and NoSQL databases such as PostgreSQL, MongoDB, and Redis, including optimization and caching.",
  },
  {
    title: "Cloud & DevOps",
    icons: [
      <FaDocker className="text-blue-500" key="docker" />,
      <SiFirebase className="text-yellow-500" key="firebase" />,
      <SiAnsible className="text-red-600" key="ansible" />,
      <SiNginx className="text-green-600" key="nginx" />,
      <SiApache className="text-orange-600" key="apache" />,
    ],
    description:
      "Deployments with Docker, CI/CD, Ansible, and server management with NGINX and Apache. Quick integrations with Firebase.",
  },
  {
    title: "Tools",
    icons: [
      <FaGithub className="text-gray-800" key="github" />,
      <SiFigma className="text-purple-500" key="figma" />,
    ],
    description:
      "Versioning with Git/GitHub and UI/UX collaboration through Figma.",
  },
];
