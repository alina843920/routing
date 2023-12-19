import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import Me from "./Me";
import Preferences from "./Preferences";
const Main = () => (
  <main className="main">
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/contact" component={Contact} />
      <Route path="/me" component={Me} />
      <Route path="/preferences" component={Preferences} />
    </Switch>
  </main>
);

export default Main;
