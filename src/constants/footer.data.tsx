import { GithubIcon } from "@/components/atoms/icons/social/github";
import { DiscordIcon } from "@/components/atoms/icons/social/discord";
import { InstagramIcon } from "@/components/atoms/icons/social/instagram";
import { NewTwitterIcon } from "@/components/atoms/icons/social/new-twitter";
import { LinkedinIcon } from "@/components/atoms/icons/social/linkedin";

export const FOOTER_SOCIALS = [
  {
    name: "Follow me on LinkedIn",
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/tavares-evaristo/",
  },
  {
    name: "Show my projects on GitHub",
    icon: <GithubIcon />,
    href: "https://github.com/tavaresevaristo",
  },
  {
    name: "Follow me on Twitter",
    icon: <NewTwitterIcon />,
    href: "https://x.com/tavares_evarsto",
  },
  {
    name: "Follow me on Discord App",
    icon: <DiscordIcon />,
    href: "https://discord.com/users/1070120884288880640",
  },
  {
    name: "Follow me on Intagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/tavares_evaristo/",
  },
];

export const FOOTER_LINKS = {
  About: [
    { label: "About me", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/cv.pdf" },
  ],
  Projects: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "GitHub", href: "https://github.com/tavaresevaristo" },
    { label: "Apps", href: "#apps" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Tutorials", href: "#tutorials" },
    { label: "Newsletter", href: "#newsletter" },
  ],
  Others: [
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "Privacy", href: "/privacy" },
  ],
};

// export const FOOTER_LINKS = {
//   Sobre: [
//     { label: "Sobre mim", href: "#about" },
//     { label: "Contato", href: "#contact" },
//     { label: "Currículo", href: "/cv.pdf" },
//   ],
//   Projetos: [
//     { label: "Portfólio", href: "#portfolio" },
//     { label: "GitHub", href: "https://github.com/tavaresevaristo" },
//     { label: "Apps", href: "#apps" },
//   ],
//   Recursos: [
//     { label: "Blog", href: "/blog" },
//     { label: "Tutoriais", href: "#tutorials" },
//     { label: "Newsletter", href: "#newsletter" },
//   ],
//   Outros: [
//     { label: "Serviços", href: "#services" },
//     { label: "Parcerias", href: "#partners" },
//     { label: "Privacidade", href: "/privacy" },
//   ],
// };
