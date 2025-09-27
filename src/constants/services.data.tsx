import { SiExpo } from "react-icons/si";
import { FaReact, FaDocker, FaHandsHelping } from "react-icons/fa";

export const myServices = [
  {
    title: "Consultoria & Mentoria",
    description:
      "Mentoring, code review e orientação estratégica para times ou devs individuais.",
    icon: <FaHandsHelping className="text-black text-3xl" />,
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Front & backend, novos projetos ou manutenção de sistemas já existentes.",
    icon: <FaReact className="text-sky-500 text-3xl" />,
  },
  {
    title: "Aplicações Mobile",
    description:
      "Apps iOS/Android com React Native e Expo, integração com APIs e recursos nativos.",
    icon: <SiExpo className="text-black text-3xl" />,
  },
  {
    title: "Infraestrutura & Manutenção",
    description:
      "Deploys, Docker, CI/CD, Ansible, monitoramento e suporte contínuo.",
    icon: <FaDocker className="text-blue-500 text-3xl" />,
  },
];
