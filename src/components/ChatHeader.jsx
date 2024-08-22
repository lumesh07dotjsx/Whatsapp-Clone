import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Profile from '../assets/user1.jpeg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VectorIcon from '../utils/VectorIcon';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../theme/Colors';
const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <VectorIcon
          type="Ionicons"
          name="arrow-back"
          size={hp('3%')}
          color={Colors.white}
          onPress={() => navigation.goBack()}
        />
        <Image source={Profile} style={styles.profilePhoto} />
        <Text style={styles.userName}>Lumesh Kumar Sahu</Text>
      </View>
      <View style={styles.innerContainer}>
        <VectorIcon
          name="videocam"
          type="Ionicons"
          size={hp('3%')}
          color={Colors.white}
        />
        <VectorIcon
          name="phone-alt"
          type="FontAwesome5"
          size={hp('2.2%')}
          color={Colors.white}
          style={styles.iconStyle}
        />
        <VectorIcon
          name="dots-three-vertical"
          type="Entypo"
          size={hp('2.3%')}
          color={Colors.white}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: wp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePhoto: {
    height: hp('5%'),
    width: wp('10%'),
    borderRadius: hp('10%'),
    marginLeft: wp('1%'),
  },
  userName: {
    fontSize: hp('2.4%'),
    color: Colors.white,
    marginLeft: wp('2%'),
    fontWeight: '600',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginHorizontal: wp('4%'),
  },
});
export default ChatHeader;
