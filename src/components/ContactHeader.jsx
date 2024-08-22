import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
const ContactHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <VectorIcon
          type="Ionicons"
          name="arrow-back"
          size={hp('3%')}
          color={Colors.white}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={styles.selectContact}>Select Contact</Text>
          <Text style={styles.count}>23 Contacts</Text>
        </View>
      </View>

      <View style={styles.headerContainer}>
        <VectorIcon
          type="Ionicons"
          name="search"
          color={Colors.white}
          size={wp('5%')}
          style={styles.iconStyle}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.white}
          size={wp('5%')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectContact: {
    fontSize: hp('2.2%'),
    color: Colors.white,
    marginLeft: wp('2%'),
    fontWeight: '500',
  },
  count: {
    fontSize: hp('1.5%'),
    color: Colors.white,
    marginLeft: wp('2%'),
  },
  iconStyle: {
    marginHorizontal: wp('2.5%'),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ContactHeader;
