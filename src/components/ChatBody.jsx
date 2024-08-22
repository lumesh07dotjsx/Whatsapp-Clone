import {View, Text, StyleSheet, ScrollView, Animated} from 'react-native';
import React, {useRef} from 'react';
import {Colors} from '../theme/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VectorIcon from '../utils/VectorIcon';
import {messageData} from '../data/messageData';
const ChatBody = () => {
  const scrollViewRef = useRef(null);
  const userId = '1';
  const UserMessageView = ({message, time}) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name="check-double"
            type="FontAwesome5"
            color={Colors.blue}
            size={hp('1.5%')}
            style={styles.doubleCheck}
          />
        </View>
      </View>
    );
  };
  const OtherUserMessageView = ({message, time}) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };
  const ScrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  };
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onContentSizeChange={ScrollToBottom}
        ref={scrollViewRef}>
        {messageData.map(item => (
          <>
            {item.id === userId ? (
              <UserMessageView message={item.message} time={item.time} />
            ) : (
              <OtherUserMessageView message={item.message} time={item.time} />
            )}
          </>
        ))}
      </ScrollView>
      <View style={styles.scrollIcon}>
        <View style={styles.scrollDownArrow}>
          <VectorIcon
            name="angle-dobule-down"
            type="Fontisto"
            color={Colors.white}
            size={hp('1.5%')}
            onPress={ScrollToBottom}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  userContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginVertical: wp('1%'),
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp('1%'),
  },
  userInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    borderTopLeftRadius: wp('30%'),
    borderBottomRightRadius: wp('30%'),
    borderBottomLeftRadius: wp('30%'),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: hp('2%'),
    color: Colors.white,
  },
  time: {
    fontSize: hp('1.1%'),
    color: Colors.white,
    marginLeft: wp('0.5%'),
  },
  doubleCheck: {
    marginLeft: hp('0.5%'),
  },
  otherUserInnerContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    borderTopRightRadius: wp('30%'),
    borderBottomRightRadius: wp('30%'),
    borderBottomLeftRadius: wp('30%'),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    borderRadius: wp('50%'),
    height: hp('4%'),
    width: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollIcon: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
export default ChatBody;
