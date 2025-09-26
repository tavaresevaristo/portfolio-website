import { LogoType } from "@/components/atoms/logo-type";
import { GlobeIcon } from "@/components/atoms/icons/globe";
import { FOOTER_LINKS, FOOTER_SOCIALS } from "@/constants/footer.data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black font-sans text-sm text-gray-300">
      <div
        className="container-lg flex flex-col gap-10 items-center py-12
                  lg:flex-row lg:justify-between lg:gap-10 mx-auto "
      >
        <div className="flex flex-col gap-8 lg:gap-5 items-center lg:items-start max-w-xs text-xs">
          <LogoType />
          <div className="flex gap-2 text-xl items-center justify-center">
            {FOOTER_SOCIALS.map(({ icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  py-2 px-2 rounded-lg
                  text-gray-300 hover:text-black
                  hover:bg-white
                  shadow-md hover:shadow-lg
                  transform hover:scale-105 active:scale-95
                  transition-all duration-300 ease-out
                "
              >
                {icon}
              </a>
            ))}
          </div>

          <div
            className="flex items-center gap-2 border px-3 py-2 rounded-md select-none
                      w-fit cursor-pointer hover:cursor-not-allowed"
          >
            <GlobeIcon />
            <span>English (EN)</span>
          </div>
          <div>©{currentYear} Tavares Evaristo. All rights reserved.</div>
        </div>

        <div className="flex items-center justify-center gap-4 gap-y-14 flex-wrap lg:gap-12">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="min-w-[120px]">
              <h4 className="font-mono font-semibold text-white mb-6">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
