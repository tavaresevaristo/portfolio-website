import { SiExpo } from "react-icons/si";
import { FaReact, FaDocker, FaHandsHelping } from "react-icons/fa";

export const myServices = [
  {
    title: "Consulting & Mentorship",
    description:
      "Mentoring, code reviews, and strategic guidance for teams or individual developers.",
    icon: <FaHandsHelping className="text-black text-3xl" />,
  },
  {
    title: "Web Development",
    description:
      "Frontend & backend solutions, from new projects to legacy system maintenance.",
    icon: <FaReact className="text-sky-500 text-3xl" />,
  },
  {
    title: "Mobile Applications",
    description:
      "iOS and Android apps with React Native and Expo, integrating APIs and native features.",
    icon: <SiExpo className="text-black text-3xl" />,
  },
  {
    title: "Infrastructure & Maintenance",
    description:
      "Deployments, Docker, CI/CD, Ansible, monitoring, and ongoing technical support.",
    icon: <FaDocker className="text-blue-500 text-3xl" />,
  },
];
