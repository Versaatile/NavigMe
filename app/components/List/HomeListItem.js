import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const HomeListItem = ({
  text,
  onPress,
  checkmark = true,
  selected = false,
  visible = true,
  // Changement ici
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor} >
    <View style={styles.homeButtonStyle}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

export default HomeListItem