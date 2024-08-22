import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CallLink from '../components/CallLink';
import RecentCalls from '../components/RecentCalls';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../theme/Colors';
const CallListScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <CallLink />
      <RecentCalls />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: wp('2.2%'),
  },
});
export default CallListScreen;
