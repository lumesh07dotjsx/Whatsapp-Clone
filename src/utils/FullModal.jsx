import {View, Text, Modal, Image, StyleSheet} from 'react-native';
import React from 'react';
import Status1 from '../assets/status1.jpeg';
import User1 from '../assets/user1.jpeg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../theme/Colors';
import VectorIcon from './VectorIcon';
import {useNavigation} from '@react-navigation/native';
import ProgressBar from './ProgressBar';
const FullModal = props => {
  const {showStatusModal, setShowStatusModal, item, setTimeUp} = props;
  const updateModalStatus = () => {
    setShowStatusModal(prev => ({...prev, [item.id]: false}));
  };
  const navigation = useNavigation();
  return (
    <Modal
      visible={showStatusModal}
      animationType="fade"
      onRequestClose={() => updateModalStatus}>
      <View style={styles.container}>
        <ProgressBar setTimeUp={setTimeUp} />
        <View style={styles.topContainer}>
          <View style={styles.profileSection}>
            <VectorIcon
              type="Ionicons"
              name="arrow-back"
              size={hp('3%')}
              color={Colors.white}
              onPress={() =>
                setShowStatusModal(prev => ({...prev, [item.id]: false}))
              }
            />
            <Image source={User1} style={styles.profileImage} />
            <Text style={styles.userName}>Lumesh</Text>
          </View>
          <VectorIcon
            type="Entypo"
            name="dots-three-vertical"
            color={Colors.white}
            size={wp('5%')}
          />
        </View>

        <Image source={Status1} style={styles.storyImage} />
        <Text style={styles.storyMsg}>Testing...!!</Text>

        <View style={styles.replyContainer}>
          <VectorIcon
            type="Entypo"
            name="chevron-small-up"
            size={hp('3%')}
            color={Colors.white}
            onPress={() =>
              setShowStatusModal(prev => ({...prev, [item.id]: false}))
            }
          />
          <Text style={styles.reply}>Reply</Text>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: Colors.primaryColor,
    justifyContent: 'space-between',
  },
  storyImage: {
    width: wp('100%'),
    height: hp('75%'),
  },
  storyMsg: {
    fontSize: hp('2.4%'),
    color: Colors.white,
    textAlign: 'center',
    marginTop: hp('1%'),
  },
  profileImage: {
    height: hp('5%'),
    width: wp('10%'),
    borderRadius: hp('50%'),
  },
  userName: {
    fontSize: wp('5%'),
    color: Colors.white,
    marginLeft: wp('2%'),
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('1%'),
    paddingVertical: hp('1%'),
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reply: {
    fontSize: wp('4%'),
    color: Colors.white,
    textAlign: 'center',
    marginBottom: hp('2%'),
    fontWeight: '500',
  },
  replyContainer: {
    alignItems: 'center',
  },
});

export default FullModal;
