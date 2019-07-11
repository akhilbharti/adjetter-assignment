import React, { Component } from "react";
import GithubUser from "./components/GithubUser";
import MainSearchBar from "./components/MainSearchBarPage";
import { Route, Switch } from "react-router-dom";
import Header from "./header";

class AppCopy extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/adjetter/:name"
            render={routeProps => <GithubUser {...routeProps} />}
          />
          <Route exact path="/" component={MainSearchBar} />
        </Switch>
      </div>
    );
  }
}

export default AppCopy;
