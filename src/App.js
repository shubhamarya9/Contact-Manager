import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Notfound from "./components/pages/Notfound";
import Test from "./components/test/Test";

import "./App.css";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/Add" component={AddContact} />
                <Route exact path="/contact/Edit/:id" component={EditContact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Test" component={Test} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
