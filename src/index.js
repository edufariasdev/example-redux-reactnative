import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import store from './store'
import Form from './components/Form';
import  List from './components/List';
import { Container } from './styles';

function Index(){
  return(
    <Provider store={store}>
      <Container>
        <Form></Form>
        <List></List>
      </Container>
    </Provider>
  );
}

export default Index;