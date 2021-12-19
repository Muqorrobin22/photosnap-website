import "./App.css";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Stories from "./components/stories/Stories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Stories />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
