import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryBlue',
    // Utilisation des médiaQueries, utilisation de StatusBar uniquement pour android et d'une taille standard pour ios
    '@media ios': {
      paddingTop: 20,
    },
  },
});
