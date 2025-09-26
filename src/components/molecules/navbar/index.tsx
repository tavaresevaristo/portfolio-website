import { Logo } from "@/components/atoms/icons/logo";
import { EN_NAV_LINKS } from "@/constants/navbar.data";
import { MenuIcon } from "@/components/atoms/icons/menu";

export function Navbar() {
  return (
    <nav className="w-full bg-foreground shadow-md z-50 font-mono text-sm">
      <div
        className="container-lg mx-auto py-4 flex items-center 
                  gap-3 justify-between"
      >
        <Logo />

        <ul className="hidden lg:flex items-center gap-6 font-medium">
          {EN_NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="relative group">
              <a
                href={href}
                className="transition-colors duration-300 hover:text-black"
              >
                {label}
                <span
                  className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black
                      transition-all duration-300 group-hover:w-full
                      "
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:block text-white bg-black 
          font-medium px-4 py-3 rounded-xl hover:scale-105 
          transition-transform duration-300"
        >
          {"Let's Talk"}
        </a>

        <button className="lg:hidden flex items-center">
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}
