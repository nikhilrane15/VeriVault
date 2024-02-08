import React from 'react';
import { View, Text } from 'react-native';
import VerificationForm from './components/VerificationForm';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>VerifyID App</Text>
      <VerificationForm />
    </View>
  );
}
