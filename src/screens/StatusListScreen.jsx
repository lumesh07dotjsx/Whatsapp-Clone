import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MyStatus from '../components/MyStatus';
import RecentStatus from '../components/RecentStatus';
import ViewStatus from '../components/ViewStatus';
import {Colors} from '../theme/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const StatusListScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <MyStatus />
      <RecentStatus />
      <ViewStatus />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: wp('2%'),
  },
});
export default StatusListScreen;
