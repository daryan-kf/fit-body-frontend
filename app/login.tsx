import React from 'react';
import { View, Text } from 'tamagui';

import { TextField, Button } from '@/components';

const Login = () => {
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

      <TextField placeholder="example@example.com" marginBottom="$4" />

      <TextField placeholder="enter password" marginBottom="$4" />

      <Text color="#FAF923" fontSize={14} textAlign="right" marginBottom="$4">
        Forgot Password?
      </Text>

      <Button marginBottom="$2">SIGN IN</Button>

      <Text color="#999999" fontSize={14} textAlign="center" marginBottom="$2">
        or sign in with
      </Text>

      <Text color="#999999" fontSize={14} textAlign="center">
        Don&apos;t have an account? <Text color="#DAF029">Sign Up</Text>
      </Text>
    </View>
  );
};

export default Login;
