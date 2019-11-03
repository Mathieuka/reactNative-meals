import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from 'react-native';

const MealItem = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version > 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={props.onSelectMeal}>
        <View style={styles.bgImageContainer}>
          <ImageBackground
            source={{uri: props.backgroundImage}}
            style={styles.bgImage}>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
              <Text>{props.duration}m</Text>
              <Text>{props.complexity.toUpperCase()}</Text>
              <Text>{props.affordability.toUpperCase()}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  bgImage: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  bgImageContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 29,
    width: '100%',
    textAlign: 'center',
  },
});

export default MealItem;
