import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";

function App() {
  return (
    <div className="App">
      <div className="header-and-banner">
        <Header />
        <Banner />
      </div>
      <main className="main-container">
        <Presentation />
      </main>
    </div>
  );
}

export default App;
