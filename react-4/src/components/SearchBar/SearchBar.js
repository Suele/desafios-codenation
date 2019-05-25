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
  position: relative;
  padding-left: 400px;
  margin: 2em auto;
  display: inline;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 0 auto;
  width: 278px;
  height: 40px;
  border-radius: 5px;
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
