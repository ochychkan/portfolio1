import { useState } from "react";
import heroBg from "../assets/hero-bg.png";
import wave from "../assets/wave.svg";
import waveLine from "../assets/wave-line.svg";
import logo from "../assets/logo.svg";
import sun from "../assets/sun.svg";
import toggle from "../assets/toggle.svg";
import line from "../assets/line.svg";
import blobBrain from "../assets/blob-brain.svg";
import brain from "../assets/brain.svg";
import community from "../assets/community.svg";
import care from "../assets/care.svg";

export default function Hero() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  };

  return (
    <section className="hero">
      <img className="hero__bg" src={heroBg} alt="" />
      <img className="hero__wave" src={wave} alt="" />

      <header className="header">
        <nav className="header__nav">
          <a href="#top" aria-label="Home">
            <img src={logo} alt="" width={50} height={50} />
          </a>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </nav>
        <button
          type="button"
          className="header__theme"
          onClick={toggleTheme}
          aria-label="Toggle light / dark theme"
        >
          <img src={sun} alt="" width={24} height={24} />
          <img src={toggle} alt="" width={39} height={39} />
        </button>
      </header>

      <div className="hero__card">
        <div className="hero__text">
          <div className="hero__eyebrow">
            <span>UI/UX DESIGNER</span>
            <img src={line} alt="" />
          </div>
          <h1>
            Designing
            <br />
            small steps
            <br />
            to a brighter mind
          </h1>
          <p>
            I create digital products for mental wellness and goal setting - with
            care, empathy and a bit of magic.
          </p>
        </div>
        <a className="button" href="#contacts">
          Discuss your project
        </a>
      </div>

      <img className="hero__line" src={waveLine} alt="" />

      <ul className="pillars">
        <li>
          <span className="pillars__icon">
            <img src={blobBrain} alt="" className="pillars__blob" />
            <img src={brain} alt="" className="pillars__glyph" />
          </span>
          <span>Mental wellness</span>
        </li>
        <li>
          <img src={community} alt="" className="pillars__icon" />
          <span>Community</span>
        </li>
        <li>
          <img src={care} alt="" className="pillars__icon" />
          <span>User Care</span>
        </li>
      </ul>
    </section>
  );
}
