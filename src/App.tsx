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
      <Header/>
      <div className="container">
        <div className="centered-box"></div>
      </div>
    </>
  );
}

export default App;
