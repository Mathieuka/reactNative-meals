import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

import THEME from '../Style/styles';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={styles.touchableCmp} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.textFlexItem} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    height: 150,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  textFlexItem: {
    fontFamily: THEME.FONT.body,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    shadowColor: 'black', // for ios only
    shadowOpacity: 0.26, // for ios only
    shadowOffset: {width: 0, height: 2}, // for ios only
    shadowRadius: 10, // for ios only
    elevation: 3,
  },
  touchableCmp: {
    flex: 1,
  },
});

export default CategoryGridTile;
