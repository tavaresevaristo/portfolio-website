import { Logo } from "@/components/atoms/icons/logo";
import { GlobeIcon } from "@/components/atoms/icons/globe";
import { FOOTER_LINKS, FOOTER_SOCIALS } from "@/constants/footer.data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-white font-sans text-sm text-gray-800">
      <div
        className="container-lg mx-auto py-12 flex flex-col 
                  md:flex-row md:justify-between md:gap-10"
      >
        {/* logo + socials */}
        <div className="space-y-4 max-w-xs text-xs">
          <Logo />
          <div className="flex gap-1 text-xl">
            {FOOTER_SOCIALS.map(({ icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-2 rounded hover:bg-gray-100 transition-transform"
              >
                {icon}
              </a>
            ))}
          </div>
          <div
            className="flex items-center gap-2 border px-3 py-2 rounded-md select-none
                      w-fit cursor-pointer hover:bg-gray-100 hover:cursor-not-allowed"
          >
            <GlobeIcon />
            <span>English (EN)</span>
          </div>
          <div>© {currentYear} Tavares Evaristo. All rights reserved.</div>
        </div>

        {/* links */}
        <div className="flex flex-wrap gap-8 md:gap-12">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="min-w-[120px]">
              <h4 className="font-mono font-semibold text-gray-900 mb-6">
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
