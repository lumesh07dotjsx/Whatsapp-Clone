import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../theme/Colors';
import {ViewedStatusData} from '../data/viewedStatusData';
const ViewStatus = () => {
  return (
    <View>
      <Text style={styles.recentUpdates}>Viewed Updates</Text>
      {ViewedStatusData.map(item => (
        <>
          <View style={styles.storySection}>
            <View style={styles.imgStory}>
              <Image source={item.profile} style={styles.statusStyle} />
            </View>
            <View style={styles.statusInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        </>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  statusStyle: {
    borderRadius: wp('50%'),
    height: hp('5%'),
    width: wp('10%'),
  },
  recentUpdates: {
    fontSize: hp('1.6%'),
    color: Colors.textGrey,
    paddingBottom: hp('1%'),
    paddingTop: hp('2%'),
    fontWeight: '500',
  },
  imgStory: {
    height: hp('6%'),
    width: wp('12%'),
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.textGrey,
    borderRadius: hp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: hp('1.8%'),
    color: Colors.white,
    fontWeight: '500',
  },
  time: {
    fontSize: hp('1.8%'),
    color: Colors.textGrey,
  },
  storySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  statusInfo: {
    marginLeft: wp('2%'),
  },
});

export default ViewStatus;
