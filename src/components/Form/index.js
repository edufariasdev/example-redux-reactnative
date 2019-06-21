import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { Text } from 'react-native';

import * as todoActions from '../../actions/todos';

import { connect } from 'react-redux';


import { Container, Input, Button, TextButton } from './styles';

class index extends Component {
  constructor(props) {
    super(props);
  }
  state={
    newTodoText: '',
  }
  addNewTodo = () => {
    console.log(this.state.newTodoText);
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: ''});
  }
  teste = (text) => {
    console.log(text);
  }


  render() {
    return (
      <Container>
          <Input
          placeholderTextColor="#999"
          value={this.state.newTodoText}
          onChangeText={ text => this.setState({ newTodoText: text})}
          />
          <Button onPress={this.addNewTodo}>
              <TextButton>Adicionar</TextButton>
          </Button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(null,mapDispatchToProps)(index);