import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import Me from "./Me";
import Preferences from "./Preferences";
const Main = () => (
  <main className="main">
    <Routes>
      <Route path="/" exact component={Dashboard} />
      <Route path="/contact" component={Contact} />
      <Route path="/me" component={Me} />
      <Route path="/preferences" component={Preferences} />
    </Routes>
  </main>
);
export default Main;
