import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './styles';
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';

/*
//Code avant animation
const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode="contain"
      style={styles.containerImage}
      source={require('./images/background.png')}
    >
      <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
); 
*/

const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  constructor(props) {
    super(props);

    // On mets ces valeurs dans le state et à chaque appel les valeurs seront changée
    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize),
    };
  }

  // Méthode qui ajoute les listener pour vérifier l'état du clavier
  componentDidMount() {
    // Changement par platforme
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';

    // Quand le clavier se montre
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow,
    );

    // Quand le clavier est caché
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide,
    );
  }

  // Quand le clavier disparait
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  // Si le clavier se montre
  keyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  // Si le clavier se cache
  keyboardWillHide = () => {
    // pour comprendre les animations https://facebook.github.io/react-native/docs/animations.html
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    // Quand le state va changer, les composant seront raffraichi
    const containerImageStyles = [
      styles.containerImage,
      { width: this.state.containerImageWidth, height: this.state.containerImageWidth },
    ];
    const imageStyles = [
      styles.logo,
      { width: this.state.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    return (
      <View style={styles.container}>
       <Text style={styles.text}>Fenrir's App</Text>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logoNew.png')}
          />
        </Animated.View>
       
      </View>
    );
  }
}

export default Logo;
