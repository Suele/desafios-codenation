import React, { Component } from 'react';
import styled from 'styled-components';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';

const Field = ({ component, ...props }) => (
  <InputAndButton>
    <Input {...props} />
    <Button>Ok</Button>
  </InputAndButton>
);

const InputAndButton = styled.div`
  padding-bottom: 1em;
  margin: 1.5em 0 auto;
  position: relative;
  padding-left: 500px;
`;

const Input = styled.input`
  font-size: 1em;
  margin: 0 auto;
  width: 300px;
  height: 30px;
  border-radius: 0.3em;
`;

class SearchBar extends Component {
  handlerSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <Field
            name="searchform"
            placeholder="Buscar Personagens"
            component={SearchForm}
            type="text"
            onChange={e => this.setState({ input: e.target.value })}
            data-testid="SearchBar"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
