
import Home from '../screens/Home';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import Map from '../screens/Map'

import {
  StackNavigator,
  addNavigationHelpers,
} from 'react-navigation';
import React from 'react';

import { StatusBar } from 'react-native';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        // Mettre null comme header fait qu'elle disparait
        header: () => null,
        // Spécifier le titre
        headerTitle: 'Home',
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },

    Map: {
      screen: Map,
      navigationOptions: {
        headerTitle: 'Map',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);


// On voit un stack navigator qui en conitient plusieurs autres
export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
  },
  {
    // Permet de faire venir les pages par le bas au lieu de la gauche
    mode: 'modal',
    // Permet de supprimer le hearder (il est déléaugé au sous stacks )
    headerMode: 'none',
    // Permet de prendre en compte la taille de la status bar sous android
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);





