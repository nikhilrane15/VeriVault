import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function VerificationForm() {
  const [userId, setUserId] = useState('');
  const [details, setDetails] = useState('');

  const submitVerification = () => {
   
  };

  return (
    <View>
      <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        placeholder="Verification Details"
        value={details}
        onChangeText={setDetails}
      />
      <Button title="Submit" onPress={submitVerification} />
    </View>
  );
}
