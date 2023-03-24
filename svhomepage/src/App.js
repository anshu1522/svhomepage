import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Library from "./Components/Library/Library";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer/>
        <Library/>
      </BrowserRouter>
    </>
  );
}

export default App;
