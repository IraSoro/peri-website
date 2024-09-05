import Phone from "./assets/home.jpg";
import "./App.css";

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
