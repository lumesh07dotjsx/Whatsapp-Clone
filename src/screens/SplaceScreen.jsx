import {Image, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import Logo from '../assets/logo.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const SplaceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={Logo} style={styles.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp('28.2%'),
    height: hp('14%'),
    resizeMode: 'contain',
  },
});

export default SplaceScreen;
