import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/home", sectionId: "home" },
  { label: "About Us", path: "/about-us", sectionId: "about" },
  { label: "Gallery", path: "/gallery", sectionId: "gallery" },
  { label: "Amenities", path: "/amenities", sectionId: "amenities" },
  {
    label: "Configuration",
    path: "/configuration",
    sectionId: "configuration",
  },
  { label: "Location", path: "/location", sectionId: "location" },
  { label: "Contact", path: "/contact-us", sectionId: "contact" },
];

export default function Navbar({ onEnquire }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavigation = (event, link) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location.pathname === link.path) {
      scrollToSection(link.sectionId);
      return;
    }

    navigate(link.path);
  };

  const handleEnquire = () => {
    setMenuOpen(false);

    if (typeof onEnquire === "function") {
      onEnquire();
    }
  };

  return (
    <>
    <nav
  className={`
    fixed left-0 right-0 top-0 z-50 w-full
    transition-all duration-300
    ${
      scrolled
        ? `
          bg-[#fffaf0]/95
          shadow-[0_8px_30px_rgba(21,53,31,0.12)]
          backdrop-blur-xl
        `
        : `
          bg-gradient-to-b
          from-[#071d12]/90
          via-[#071d12]/60
          to-transparent
        `
    }
  `}
>

        <div
          className="
            mx-auto flex h-[76px] w-full max-w-[1460px]
            items-center justify-between
            px-5 sm:px-8 lg:px-10
          "
        >
          <a
            href="/home"
            onClick={(event) =>
              handleNavigation(event, {
                path: "/home",
                sectionId: "home",
              })
            }
            aria-label="Green Vatika Farms home"
            className="
              flex shrink-0 items-center
              rounded-lg outline-none
              focus-visible:ring-2
              focus-visible:ring-[#c49b52]
            "
          >
            <img
              src="/gv.png"
              alt="Green Vatika Farms"
              className="
                h-[58px] w-auto max-w-[130px]
                object-contain
                transition-transform duration-300
                hover:scale-[1.03]
                sm:h-[62px]
              "
            />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(event) => handleNavigation(event, link)}
                  className={`
                    px-3.5 py-2
                    text-[14px] font-semibold
                    transition-colors duration-200
                    xl:px-4
                    ${
                      scrolled
                        ? "text-[#27382d] hover:text-[#c49b52]"
                        : "text-white/90 hover:text-[#e5bd72]"
                    }
                    ${
                      isActive
                        ? scrolled
                          ? "text-[#c49b52]"
                          : "text-[#e5bd72]"
                        : ""
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}

            <button
              type="button"
              onClick={handleEnquire}
              className={`
                ml-3 inline-flex min-h-11 items-center justify-center
                rounded-xl px-5 py-2.5
                text-[14px] font-bold
                transition-all duration-300
                hover:-translate-y-0.5
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#dfba70]
                focus-visible:ring-offset-2
                ${
                  scrolled
                    ? `
                      bg-[#173d23]
                      text-white
                      shadow-[0_8px_20px_rgba(23,61,35,0.2)]
                      hover:bg-[#245733]
                    `
                    : `
                      bg-[#c49b52]
                      text-white
                      shadow-[0_8px_22px_rgba(196,155,82,0.3)]
                      hover:bg-[#a97c37]
                    `
                }
              `}
            >
              Get In Touch
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className={`
              relative flex h-11 w-11 flex-col items-center
              justify-center gap-[5px]
              rounded-xl transition-colors lg:hidden
              ${
                scrolled
                  ? "bg-[#173d23]/5 hover:bg-[#173d23]/10"
                  : "bg-white/10 hover:bg-white/15"
              }
            `}
          >
            <span
              className={`
                block h-[2px] w-6 rounded-full
                transition-all duration-300
                ${scrolled ? "bg-[#173d23]" : "bg-white"}
                ${menuOpen ? "translate-y-[7px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                block h-[2px] w-6 rounded-full
                transition-all duration-300
                ${scrolled ? "bg-[#173d23]" : "bg-white"}
                ${menuOpen ? "scale-x-0 opacity-0" : ""}
              `}
            />

            <span
              className={`
                block h-[2px] w-6 rounded-full
                transition-all duration-300
                ${scrolled ? "bg-[#173d23]" : "bg-white"}
                ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}
              `}
            />
          </button>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 z-40
          bg-[#06150d]/70
          backdrop-blur-sm
          transition-all duration-300
          lg:hidden
          ${
            menuOpen
              ? "visible opacity-100 pointer-events-auto"
              : "invisible opacity-0 pointer-events-none"
          }
        `}
      />

      <aside
        className={`
          fixed bottom-0 right-0 top-0 z-50
          flex w-[300px] max-w-[86vw] flex-col
          border-l border-[#dfba70]/20
          bg-[#102d1b]
          px-5 pb-7 pt-24
          shadow-[-20px_0_50px_rgba(0,0,0,0.3)]
          transition-transform duration-300 ease-out
          lg:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-hidden={!menuOpen}
      >
        <div
          className="
            pointer-events-none absolute -right-20 -top-20
            h-52 w-52 rounded-full
            bg-[#c49b52]/10 blur-2xl
          "
        />

        <div
          className="
            relative mb-5 border-b border-white/10 pb-5
          "
        >
          <p
            className="
              text-[11px] font-bold uppercase
              tracking-[2.5px] text-[#dfba70]
            "
          >
            Green Vatika Farms
          </p>

          <p className="mt-1 text-xs text-white/50">
            Sector 168, Noida
          </p>
        </div>

        <div className="relative flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(event) => handleNavigation(event, link)}
                className={`
                  flex min-h-11 items-center
                  px-4 py-3
                  text-[14px] font-semibold
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-[#dfba70]"
                      : "text-white/80 hover:text-[#dfba70]"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div
          className="
            relative mt-auto border-t border-white/10 pt-5
          "
        >
          <button
            type="button"
            onClick={handleEnquire}
            className="
              flex min-h-12 w-full items-center justify-center
              rounded-xl bg-[#c49b52]
              px-5 py-3
              text-sm font-bold text-white
              shadow-[0_10px_25px_rgba(196,155,82,0.2)]
              transition-all duration-300
              hover:bg-[#a97c37]
              active:scale-[0.98]
            "
          >
            Get In Touch
          </button>

          <p
            className="
              mt-4 text-center text-[11px]
              leading-5 text-white/40
            "
          >
            Luxury farmhouse plots in Sector 168, Noida
          </p>
        </div>
      </aside>
    </>
  );
}