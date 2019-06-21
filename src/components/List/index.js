import React, { Component } from 'react';
import { View, Text } from 'react-native';


import { Container, List, ListItem } from './styles';
import { connect } from 'react-redux';

const Index = (props) =>(
      <Container>
        <List>
          { 
            props.todos.map( todo => (
              <ListItem key={todo.id}>{todo.text}</ListItem>
            ))
          }
            
        </List>
      </Container>
    );

    const mapStateToProps = state => ({
      todos: state.todos,
    });
    export default connect(mapStateToProps)(Index)
