import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text } from 'tamagui';

import { supabase } from '@/lib/supabase';

import { TextField, Button } from '@/components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View flex={1} paddingHorizontal="$6" paddingVertical="$8">
      <Text color="#DAF029" marginBottom="$8">
        Log In
      </Text>

      <Text color="#FFFFFF" fontSize={20} marginBottom="$4">
        Welcome Back!
      </Text>

      <Text color="#999999" fontSize={14} textAlign="center" marginBottom="$4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

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

      <Text color="#FAF923" fontSize={14} textAlign="right" marginBottom="$4">
        Forgot Password?
      </Text>

      <Button
        marginBottom="$2"
        disabled={loading}
        onPress={() => signInWithEmail()}
      >
        SIGN IN
      </Button>

      <Text color="#999999" fontSize={14} textAlign="center" marginBottom="$2">
        or sign in with
      </Text>

      <Text color="#999999" fontSize={14} textAlign="center">
        Don&apos;t have an account?{' '}
        <Link href="/signup">
          <Text color="#DAF029">Sign Up</Text>
        </Link>
      </Text>
    </View>
  );
};

export default Login;
