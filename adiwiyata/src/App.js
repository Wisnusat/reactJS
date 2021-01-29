import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Kalender from "./components/pages/Kalender";


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/kalender" exact component={Kalender} />
        </Switch>
      </div>
    );
  }
}

export default App;
