import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import WhatsappLogo from '../assets/whatsapp-logo.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={WhatsappLogo} style={styles.logoStyle} />
      <View style={styles.headerIcons}>
        <VectorIcon
          type="Feather"
          name="camera"
          color={Colors.secondaryColor}
          size={wp('5%')}
        />
        <VectorIcon
          type="Ionicons"
          name="search"
          color={Colors.secondaryColor}
          size={wp('5%')}
          style={styles.iconStyle}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.secondaryColor}
          size={wp('5%')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoStyle: {
    height: hp('3%'),
    width: wp('30%'),
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginHorizontal: hp('2%'),
  },
});
export default Header;
