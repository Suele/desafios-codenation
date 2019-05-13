import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  render() {
    const HomeRoute = ({ match, recipes, searchString }) => (
      <Home
        match={match.params.searchString}
        recipes={recipes}
        searchString={searchString}
      />
    );

    const RecipePageRoute = ({ match, recipes, searchString }) => (
      <RecipePage
        match={match.params.searchString}
        recipes={recipes}
        searchString={searchString}
      />
    );
    const { history } = this.props;
    return (
      <div className="App">
        <Route
          exact
          path="/search/:searchString?"
          children={({ match }) => (
            <Navbar
              searchString={match ? match.params.searchString || "" : ""}
              history={searchString => this.setState({searchString:  match.params.searchString}, history.push(`/search/${searchString}`))}
            />
          )}
        />

        <div className="container mt-10">
          <Switch>
            <Route exact path="/recipe" component={RecipePageRoute} />
            <Route path="/search/:searchString?" component={HomeRoute} />
            <Redirect to="/search" />
          </Switch>
        </div>
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
