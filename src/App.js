import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Locations from "./pages/Locations";
import Models from "./pages/Models";
import Navigation from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Popularity from "./pages/Popularity";
import Players from "./pages/Players";

import styles from "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/locations" component={Locations} />
            <Route path="/models" component={Models} />
            <Route path="/popularity" component={Popularity} />
            <Route path="/players" component={Players} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
