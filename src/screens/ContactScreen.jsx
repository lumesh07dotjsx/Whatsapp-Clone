import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ContactHeader from '../components/ContactHeader';
import ContactList from '../components/ContactList';

const ContactScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ContactHeader />
      <ContactList />
    </ScrollView>
  );
};

export default ContactScreen;
