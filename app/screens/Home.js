import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView , Platform , ScrollView } from 'react-native';
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


class Home extends Component {
  // Appelé quand on instancie le component
  componentWillMount() {
  }
  //Permet de récupérer un erreur
  componentWillReceiveProps(nextProps) {

  }

  handleOptionsPress = () => {
    console.log('options press');
    this.props.navigation.navigate('Options');
  };

  handlePressMap = () => {
    console.log('Map Clicked')
    this.props.navigation.navigate('Map');
  }

  render() {
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <Logo tintColor={this.props.primaryColor} /> 
        
        <ScrollView style={{margin : 10 , width : '100%'}}>
        <HomeListItem
text="Show my position"          onPress={this.handlePressMap}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-map`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator> </Separator>   
        <HomeListItem
          text="Show my position"
          onPress={this.handlePressMap}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-map`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator> </Separator>   
        <HomeListItem
text="Show my position"          onPress={this.handlePressMap}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-map`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
                <HomeListItem
text="Show my position"          onPress={this.handlePressMap}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-map`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator> </Separator>   
        </ScrollView>

      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));