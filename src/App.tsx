import Phone from "./assets/home.jpg";
import GooglePlayIcon from "./assets/GooglePlayIcon.png";
import "./App.css";
import "./styles/Buttons.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/favicon.ico" alt="Logo" />
      </div>
      <a
        href="https://github.com/your-repo"
        className="github-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </header>
  );
};

const GooglePlayButton = () => {
  return (
    <a className="google-play-btn" href="#">
      <img src={GooglePlayIcon} alt="Google Play Icon" />
      <div className="google-play-text">
        <span className="small-text">GET IT ON</span>
        <span className="big-text">Google Play</span>
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
              <h1>Description</h1>
              <p>Here is additional text or information about something.</p>
              <GooglePlayButton />
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
