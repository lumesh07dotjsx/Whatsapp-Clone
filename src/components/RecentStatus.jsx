import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../theme/Colors';
import {RecentStatusData} from '../data/recentStatusData';
import FullModal from '../utils/FullModal';
const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState(true);
  const setTimeUp = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}));
  };
  const ViewStatus = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: true}));
  };
  return (
    <View>
      <Text style={styles.recentUpdates}>Recent Updates</Text>
      {RecentStatusData.map(item => (
        <>
          <TouchableOpacity onPress={() => ViewStatus(item.id)}>
            <View style={styles.storySection}>
              <View style={styles.imgStory}>
                <Image source={item.userImg} style={styles.statusStyle} />
              </View>
              <View style={styles.statusInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FullModal
            setShowStatusModal={value =>
              setShowStatusModal(prev => ({...prev, [item.id]: value}))
            }
            item={item}
            showStatusModal={showStatusModal[item.id] || false}
            setTimeUp={() => setTimeUp(item.id)}
          />
        </>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  statusStyle: {
    borderRadius: wp('50%'),
    height: hp('5%'),
    width: wp('10%'),
  },
  recentUpdates: {
    fontSize: hp('1.6%'),
    color: Colors.textGrey,
    paddingBottom: hp('1%'),
    paddingTop: hp('2%'),
    fontWeight: '500',
  },
  imgStory: {
    height: hp('6%'),
    width: wp('12%'),
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.tertiary,
    borderRadius: hp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: hp('1.8%'),
    color: Colors.white,
    fontWeight: '500',
  },
  time: {
    fontSize: hp('1.8%'),
    color: Colors.textGrey,
  },
  storySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  statusInfo: {
    marginLeft: wp('2%'),
  },
});

export default RecentStatus;
