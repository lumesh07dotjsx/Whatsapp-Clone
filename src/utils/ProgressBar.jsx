import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../theme/Colors';
const ProgressBar = setTimeUp => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const animateProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: 200,
      duration: 10000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        console.log('Animation Stopped and progressbar stoped..!!');
      }
    });
  };
  useEffect(() => {
    animateProgress();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.progressBg}>
        <Animated.View
          style={[
            styles.Progress,
            {
              width: progressAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: hp('1%'),
  },
  Progress: {
    width: wp('100%'),
    height: hp('1%'),
    backgroundColor: Colors.white,
    borderRadius: wp('1%'),
  },
  progressBg: {
    width: wp('100%'),
    height: hp('1%'),
    backgroundColor: '#708090',
    borderRadius: wp('1%'),
  },
});
export default ProgressBar;
