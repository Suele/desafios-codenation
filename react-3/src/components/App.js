import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";

class App extends Component {
  render() {
    const HomeRoute = ({ match, recipes, searchString }) => (
      <Home
        match={match.params.searchString}
        recipes={recipes}
        searchString={searchString}
      />
    );

    const RecipePageRoute = ({ match, recipes }) => (
      <RecipePage match={match.params.title} recipes={recipes} />
    );
    const { history } = this.props;
    return (
      <div className='App'>
        <Route
          exact
          path='/search/:searchString?'
          children={({ match }) => (
            <Navbar
              searchString={match ? match.params.searchString || "" : ""}
              history={searchString =>
                this.setState(
                  { searchString: match.params.searchString },
                  history.push(`/search/${searchString}`)
                )
              }
            />
          )}
        />

        <div className='container mt-10'>
          <Switch>
            <Route exact path='/recipe/:title' component={RecipePageRoute} />
            <Route path='/search/:searchString?' component={HomeRoute} />
            <Redirect to='/search' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
