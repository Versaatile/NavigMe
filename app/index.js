import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
//import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';


import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $lightGray: '#000000',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});


const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);


export default  () => (
        <Provider store={store}>
    <AlertProvider>
      <AppWithNavigationState />
    </AlertProvider>
</Provider> );

