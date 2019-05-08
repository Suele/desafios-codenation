import React, { Component } from "react";
import { Route, withRouter, matchPath } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import recipes from "../sample_data/recipes.json";
import { slugify } from "../helpers";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: this.props.location.pathname,
      searchString: ""
    };
  }

  componentWillMount() {
    const { pathName, searchString } = this.state;

    let path = pathName.replace("/", "");

    this.setState({
      searchString: path,
      pathName: path
    });

    console.log("pathName: ", pathName);
    console.log("searchString: ", searchString);
    console.log("path: ", path);
  }

  render() {
    let { searchString, pathName } = this.state;
    const { history } = this.props;

    const { pathname } = this.props.location;
    const match = matchPath(pathname, {
      path: "/recipe/:searchString",
      exact: true
    });

    return (
      <div className='App'>
        {console.log("searchString: ", searchString)}
        {console.log("pathName: ", pathName)}
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar
          searchString={searchString}
          onchange={pathName =>
            this.setState({ searchString: pathName }, history.push(pathName))
          }
        />
        )}/>
        <div className='container mt-10'>
          {/* TODO: Implementar rotas  */}
          <Route
            exact
            path='/'
            render={({
              match: {
                params: { searchString }
              }
            }) => {
              return <Home recipes={recipes} searchString={searchString} />;
            }}
          />

          <Route
            path='/:searchString'
            render={({
              match: {
                params: { searchString }
              }
            }) => {
              return (
                <RecipePage searchString={searchString} recipes={recipes} />
              );
            }}
          />

          <Route
            exact
            path='/recipe/:searchString'
            render={({
              match: {
                params: { searchString }
              }
            }) => {
              return (
                <RecipePage searchString={searchString} recipes={recipes} />
              );
            }}
          />

          <Route
            render={() => (
              <h1>Não foi possível encontrar sua receita ou ingrediente.</h1>
            )}
          />
          {console.log("match: ", match)}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  searchString: PropTypes.string,
  recipe: PropTypes.object
};

export default withRouter(App);
