import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Me from "./components/Me";
import Preferences from "./components/Preferences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/contact" component={Contact} />
            <Route path="/me" component={Me} />
            <Route path="/preferences" component={Preferences} />
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
