import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView , Platform , View } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { HomeListItem, Separator } from '../components/List';

import { connectAlert } from '../components/Alert';
import { Ionicons } from '@expo/vector-icons';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;


class Map extends Component {

  render() {
    return (
      <Container backgroundColor={this.props.primaryColor}>

      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(connectAlert(Map));