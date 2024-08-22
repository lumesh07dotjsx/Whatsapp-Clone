import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const [sendEnable, setSendEnable] = useState(false);
  const onChange = value => {
    setMessage(value);
    setSendEnable(true);
  };
  const onSend = value => {
    setMessage('');
    setSendEnable(false);
    Alert.alert('Message sent successfully...!!');
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.row}>
          <VectorIcon
            type="MaterialIcons"
            name="emoji-emotions"
            size={wp('5%')}
            color={Colors.white}
          />
          <TextInput
            placeholder="Type a Message..."
            style={styles.textInputStyle}
            placeholderTextColor={Colors.textGrey}
            onChangeText={value => onChange(value)}
            value={message}
          />
        </View>
        <View style={styles.row}>
          <VectorIcon
            type="Ionicons"
            name="attach-outline"
            size={wp('6%')}
            color={Colors.white}
          />
          {!sendEnable && (
            <>
              <VectorIcon
                type="FontAwesome"
                name="rupee"
                size={wp('5%')}
                color={Colors.white}
                style={styles.iconStyle}
              />
              <VectorIcon
                type="FontAwesome"
                name="camera"
                size={wp('4.3%')}
                color={Colors.white}
              />
            </>
          )}
        </View>
      </View>
      <View style={styles.rightContainer}>
        {sendEnable ? (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="send"
            size={wp('5%')}
            color={Colors.white}
            onPress={onSend}
          />
        ) : (
          <VectorIcon
            type="FontAwesome5"
            name="microphone"
            size={wp('5%')}
            color={Colors.white}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingVertical: hp('1.2%'),
    paddingHorizontal: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: hp('1%'),
  },
  leftContainer: {
    width: wp('84%'),
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor,
    borderRadius: wp('10%'),
    paddingHorizontal: hp('1.5%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightContainer: {
    backgroundColor: Colors.teal,
    padding: hp('1.5%'),
    borderRadius: hp('50%'),
    width: wp('11.5%'),
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconStyle: {
    marginHorizontal: wp('5%'),
  },
  textInputStyle: {
    fontSize: hp('2%'),
    color: Colors.white,
    marginLeft: wp('1%'),
  },
});
export default ChatFooter;
