import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../theme/Colors';
import {ContactListData} from '../data/contactListData';
import firestore from '@react-native-firebase/firestore';
const ContactList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData()
      .then(res => setUsers(res))
      .catch(error => console.log('error :', error));
  }, []);

  const getUserData = async () => {
    const userRef = await firestore().collection('users').get();
    const userData = Promise.all(
      userRef.docs
        .filter(item => {
          return item.id != userId;
        })
        .map(async item => {
          const id = item.id;
          const name = item.data().name;
          return {
            id,
            name,
          };
        }),
    );
    return userData;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact on Whatsapp</Text>
      {ContactListData.map(item => (
        <View style={styles.contactContainer}>
          <Image source={item.userImg} style={styles.imgStyle} />
          <Text style={styles.userName}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: hp('1%'),
  },
  imgStyle: {
    height: hp('6%'),
    width: wp('12%'),
    borderRadius: wp('10%'),
  },
  userName: {
    color: Colors.textColor,
    fontSize: hp('2%'),
    fontWeight: '500',
    marginLeft: wp('2%'),
  },
  title: {
    color: Colors.textGrey,
    fontSize: wp('4%'),
    marginTop: hp('0.3%'),
    fontWeight: '500',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1%'),
  },
});
export default ContactList;
