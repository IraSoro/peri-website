import { useState, useEffect } from "react";

import Phone from "./assets/phone.png";
import GooglePlayIcon from "./assets/GooglePlayIcon.png";
import GitHubIcon from "./assets/github-logo.png";
import Logo from "./assets/favicon.ico";

import { LINKS } from "./constants";

import "./App.css";
import "./styles/Buttons.css";

const Header = () => {
  const [underline, setUnderline] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setUnderline(true);
      } else {
        setUnderline(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${underline ? "header-underline" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span className="logo-text">Peri</span>
      </div>
      <DemoButton />
    </header>
  );
};

const DemoButton = () => {
  return (
    <a href={LINKS.DEMO} className="demo-btn">
      View Demo
    </a>
  );
};

const GooglePlayButton = () => {
  return (
    <a className="btn" href={LINKS.GOOGLE_PLAY}>
      <img src={GooglePlayIcon} alt="Google Play Icon" />
      <div className="btn-text">
        <span className="small-text">GET IT ON</span>
        <span className="big-text">Google Play</span>
      </div>
    </a>
  );
};

const GitHubButton = () => {
  return (
    <a className="btn" href={LINKS.GITHUB_REPO}>
      <img src={GitHubIcon} alt="GitHub Icon" />
      <div className="btn-text">
        <span className="small-text">GO TO</span>
        <span className="big-text">GitHub</span>
      </div>
    </a>
  );
};

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="centered-box">
          <div className="description-and-image">
            <div className="description">
              <h1>The period tracker app</h1>
              <p>
                The app will help you&#32;
                <span className="highlighted-text">
                  track your menstrual cycle.
                </span>
                &#32;The app displays info about the current cycle, ovulation,
                cycle phases, predicts the dates of the next cycles and saves
                the history of previous ones.
                <br />
                All data is stored on your device, ensuring&#32;
                <span className="highlighted-text">privacy</span>.
              </p>
              <div className="button-container">
                <GooglePlayButton />
                <GitHubButton />
              </div>
            </div>
            <div className="image-box">
              <img src={Phone} alt="Image description" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
