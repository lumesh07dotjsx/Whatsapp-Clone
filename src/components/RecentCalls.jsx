import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../theme/Colors';
import User1 from '../assets/user1.jpeg';
import VectorIcon from '../utils/VectorIcon';
import {RecentCallsData} from '../data/recentCallsData';
const RecentCalls = () => {
  return (
    <>
      <Text style={styles.recent}>Recent</Text>
      {RecentCallsData.map(item => (
        <View style={styles.container}>
          <View style={styles.row}>
            <Image source={item.profileImage} style={styles.imgStyle} />
            <View style={styles.linkSection}>
              <Text style={styles.callLink}>{item.name}</Text>
              <View style={styles.callDetails}>
                {item.incoming && (
                  <VectorIcon
                    name="arrow-down-left"
                    type="Feather"
                    size={hp('3%')}
                    color={Colors.red}
                  />
                )}
                {item.outgoing && (
                  <VectorIcon
                    name="arrow-up-right"
                    type="Feather"
                    size={hp('3%')}
                    color={Colors.tertiary}
                  />
                )}
                <Text style={styles.shareLink}>{item.time}</Text>
              </View>
            </View>
          </View>
          {item.video && (
            <VectorIcon
              name="videocam"
              type="Ionicons"
              size={hp('3%')}
              color={Colors.tertiary}
            />
          )}
          {item.audio && (
            <VectorIcon
              name="phone-alt"
              type="FontAwesome5"
              size={hp('2.5%')}
              color={Colors.tertiary}
            />
          )}
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  recent: {
    fontSize: hp('1.8%'),
    color: Colors.textGrey,
    marginTop: hp('2%'),
    paddingBottom: hp('1%'),
    fontWeight: '500',
  },
  imgStyle: {
    height: hp('6%'),
    width: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('10%'),
  },
  callLink: {
    fontSize: hp('2%'),
    color: Colors.white,
    fontWeight: '500',
  },
  shareLink: {
    fontSize: hp('1.8%'),
    color: Colors.textGrey,
    marginTop: hp('0.2%'),
  },
  linkSection: {
    marginLeft: wp('2%'),
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('0.8%'),
  },
  row: {
    flexDirection: 'row',
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.2%'),
  },
});
export default RecentCalls;
