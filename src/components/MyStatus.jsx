import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Proile from '../assets/user1.jpeg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
const MyStatus = () => {
  return (
    <View style={styles.container}>
      <Image source={Proile} style={styles.profileStyle} />
      <View style={styles.iconbg}>
        <VectorIcon
          name="pluscircle"
          type="AntDesign"
          size={hp('3%')}
          color={Colors.tertiary}
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.myStatus}>My Status</Text>
        <Text style={styles.addStatus}>Tab to add staus update</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileStyle: {
    borderRadius: wp('50%'),
    height: hp('5%'),
    width: wp('10%'),
    position: 'relative',
  },
  myStatus: {
    fontSize: hp('2%'),
    color: Colors.white,
    fontWeight: '500',
  },
  addStatus: {
    fontSize: hp('1.4%'),
    color: Colors.textGrey,
  },
  statusContainer: {
    marginLeft: wp('4%'),
  },
  iconbg: {
    backgroundColor: Colors.white,
    height: hp('3%'),
    width: wp('6%'),
    borderRadius: wp('50%'),
    position: 'absolute',
    bottom: hp('0%'),
    left: hp('3%'),
    top: hp('2.5%'),
  },
});
export default MyStatus;
