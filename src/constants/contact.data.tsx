import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const contactMe = [
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+244 936 561 472",
      href: "https://wa.me/243936561472",
      bg: "bg-green-50",
      color: "text-green-600",
    },
    {
      icon: <HiOutlineMail />,
      label: "Email",
      value: "tavaresevaristo07@gmail.com",
      href: "mailto:tavaresevaristo07@gmail.com",
      bg: "bg-red-50",
      color: "text-red-500",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Golf1, Kilamba Kiaxi, Luanda",
      bg: "bg-blue-50",
      color: "text-blue-500",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://linkedin.com/in/tavaresevaristo",
      bg: "bg-gray-50",
      color: "text-blue-700",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/tavaresevaristo",
      bg: "bg-gray-100",
      color: "text-gray-800",
    },
  ];