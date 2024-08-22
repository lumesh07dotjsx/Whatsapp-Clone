import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ChatList from '../components/ChatList';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
const ChatListScreen = () => {
  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate('ContactScreen');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList />
      </ScrollView>
      <TouchableOpacity style={styles.contactIcon} onPress={onNavigate}>
        <VectorIcon
          type="MaterialCommunityIcons"
          name="message-reply-text"
          size={wp('6%')}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.background,
  },
  contactIcon: {
    backgroundColor: Colors.tertiary,
    width: wp('12%'),
    height: hp('6%'),
    borderRadius: wp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp('3%'),
    right: wp('2%'),
  },
});
export default ChatListScreen;
