import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';
import Wallpaper from '../assets/wallpaper.jpeg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ChatScreen = () => {
  return (
    <>
      <ChatHeader />
      <ImageBackground source={Wallpaper} style={styles.wallpaper}>
        <ChatBody />
      </ImageBackground>
      <ChatFooter />
    </>
  );
};
const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    paddingBottom: hp('0.4%'),
  },
});
export default ChatScreen;
