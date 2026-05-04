import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const sections = ["home", "about", "writing", "design", "contact"];

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const scrollMarker = window.scrollY + headerHeight + 24;

      let nextActiveSection = sections[0];

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollMarker) {
          nextActiveSection = sectionId;
        }
      });

      setActiveSection(nextActiveSection);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-component page__grid">
      <nav className="nav page__grid-right">
        <a
          className={`nav__link${activeSection === "home" ? " is-active" : ""}${isMenuOpen ? " is-visible" : ""}`}
          href="#home"
          data-section="home"
          aria-current={activeSection === "home" ? "location" : undefined}
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          className={`nav__link${activeSection === "about" ? " is-active" : ""}${isMenuOpen ? " is-visible" : ""}`}
          href="#about"
          data-section="about"
          aria-current={activeSection === "about" ? "location" : undefined}
          onClick={closeMenu}
        >
          About
        </a>
        <a
          className={`nav__link${activeSection === "writing" ? " is-active" : ""}${isMenuOpen ? " is-visible" : ""}`}
          href="#writing"
          data-section="writing"
          aria-current={activeSection === "writing" ? "location" : undefined}
          onClick={closeMenu}
        >
          Writing
        </a>
        <a
          className={`nav__link${activeSection === "design" ? " is-active" : ""}${isMenuOpen ? " is-visible" : ""}`}
          href="#design"
          data-section="design"
          aria-current={activeSection === "design" ? "location" : undefined}
          onClick={closeMenu}
        >
          Design
        </a>
        <a
          className={`nav__link${activeSection === "contact" ? " is-active" : ""}${isMenuOpen ? " is-visible" : ""}`}
          href="#contact"
          data-section="contact"
          aria-current={activeSection === "contact" ? "location" : undefined}
          onClick={closeMenu}
        >
          Contact
        </a>
        <ThemeToggle />
        <button
          className={`nav__burger${isMenuOpen ? " is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <span className="nav__burger-line"></span>
          <span className="nav__burger-line"></span>
          <span className="nav__burger-line"></span>
        </button>
      </nav>
    </div>
  );
}