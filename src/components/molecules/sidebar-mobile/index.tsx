"use client";
import { FC } from "react";
import { SidebarMobileProps } from "./types";
import { Logo } from "@/components/atoms/icons/logo";
import { EN_NAV_LINKS } from "@/constants/navbar.data";
import { CancelIcon } from "@/components/atoms/icons/cancel";

export const SidebarMobile: FC<SidebarMobileProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Logo />
          <button onClick={onClose}>
            <CancelIcon />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-4 py-6 font-medium">
          {EN_NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={onClose}
              className="py-2 px-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={onClose}
            className="mt-4 text-center text-white bg-black 
              font-medium px-4 py-3 rounded-xl hover:scale-105 
              transition-transform duration-300"
          >
            {"Let's Talk"}
          </a>
        </nav>
      </div>
    </>
  );
};
