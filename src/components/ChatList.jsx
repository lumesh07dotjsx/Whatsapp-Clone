import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import {ChatListData} from '../data/chatListData';
import {useNavigation} from '@react-navigation/native';
const ChatList = () => {
  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate('ChatScreen');
  };
  return (
    <>
      {ChatListData.map(item => (
        <View key={item.id}>
          <TouchableOpacity style={styles.container} onPress={onNavigate}>
            <View style={styles.leftContainer}>
              <Image source={item.profile} style={styles.profileImage} />
              <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.timeStamp}>{item.time}</Text>
              {item.mute && (
                <VectorIcon
                  type="MaterialCommunityIcons"
                  name="volume-variant-off"
                  size={wp('6%')}
                  color={Colors.textGrey}
                  style={styles.muteIcon}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  profileImage: {
    borderRadius: wp('50%'),
    height: hp('6%'),
    width: wp('12%'),
    marginRight: wp('3%'),
  },
  userName: {
    color: Colors.textColor,
    fontSize: hp('2%'),
    fontWeight: '500',
  },
  message: {
    color: Colors.textGrey,
    fontSize: hp('2%'),
    marginTop: hp('0.2%'),
  },
  timeStamp: {
    color: Colors.textGrey,
    fontSize: hp('1.5%'),
  },
  muteIcon: {
    marginTop: hp('0.5%'),
    marginLeft: wp('2%'),
  },
  rightContainer: {
    textAlign: 'center',
    paddingTop: hp('0.1%'),
  },
});
export default ChatList;
