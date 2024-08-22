import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
const CallLink = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBg}>
        <VectorIcon
          name="link"
          type="Fontisto"
          size={hp('3%')}
          color={Colors.white}
        />
      </View>
      <View style={styles.linkSection}>
        <Text style={styles.callLink}>Create call links</Text>
        <Text style={styles.shareLink}>
          Share a link for your whatsapp call
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBg: {
    backgroundColor: Colors.tertiary,
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
});
export default CallLink;
