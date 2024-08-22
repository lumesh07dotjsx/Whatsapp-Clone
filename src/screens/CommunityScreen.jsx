import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CommunityImg from '../assets/community-img.png';
import {Colors} from '../theme/Colors';
const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={CommunityImg} style={styles.communityImg} />
      <Text style={styles.communityText}>Introducing Communities</Text>
      <Text style={styles.communitySubText}>
        Easily organize your related groups and send annoucements. Now, Your
        comminities, like neighbourhood or schools, can have thier own space.
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Start Your Community</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityImg: {
    height: hp('16%'),
    width: wp('58%'),
  },
  communityText: {
    fontSize: hp('3%'),
    color: Colors.white,
    fontWeight: '500',
    marginTop: hp('6%'),
  },
  communitySubText: {
    color: Colors.textGrey,
    fontSize: hp('2%'),
    textAlign: 'center',
    paddingHorizontal: hp('4%'),
    marginTop: hp('1%'),
    lineHeight: hp('3%'),
    letterSpacing: hp('0.1%'),
  },
  buttonStyle: {
    backgroundColor: Colors.tertiary,
    marginTop: hp('4%'),
    padding: wp('2%'),
    borderRadius: wp('10%'),
    width: wp('80%'),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: hp('1.8%'),
    color: Colors.primaryColor,
    fontWeight: '600',
  },
});
export default CommunityScreen;
