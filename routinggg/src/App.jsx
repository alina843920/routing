import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
const App = () => (
  <Router>
    <div>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  </Router>
);

export default App;
