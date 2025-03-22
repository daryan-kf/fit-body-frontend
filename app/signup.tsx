import { Link } from 'expo-router';
import { View, Text } from 'tamagui';
import { TextField, Button } from '@/components';

import React, { useState } from 'react';
import { Alert } from 'react-native';
import { supabase } from '@/lib/supabase';
const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error
    } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <View flex={1} paddingHorizontal="$6" paddingVertical="$8">
      <Text>Signup Screen</Text>
      <TextField
        placeholder="Full Name"
        marginBottom="$4"
        onChangeText={text => setFullName(text)}
        value={fullName}
      />
      <TextField
        placeholder="example@example.com"
        marginBottom="$4"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextField
        placeholder="enter password"
        marginBottom="$4"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button
        marginBottom="$2"
        disabled={loading}
        onPress={() => signUpWithEmail()}
      >
        SIGN UP
      </Button>

      <Link href="/signin">
        <Text>Back Sign in</Text>
      </Link>
    </View>
  );
};

export default Signup;
