import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, XStack, YStack } from 'tamagui';

import { supabase } from '@/lib/supabase';

import { TextField, Button, Icon, Text } from '@/components';

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
    <View paddingHorizontal="$6" paddingVertical="$8" height="100%">
      <YStack flex={1} justifyContent="space-between">
        <XStack
          width="100%"
          alignItems="center"
          position="relative"
          marginTop="$4"
        >
          <Link href="/">
            <Icon
              name="chevronLeft"
              size={18}
              position="absolute"
              left={0}
              color="#DAF029"
            />
          </Link>

          <Text
            color="#DAF029"
            fontWeight="bold"
            fontSize={20}
            textAlign="center"
            flex={1} // makes sure the text container takes up available space
          >
            Log In
          </Text>
        </XStack>
        <YStack>
          <YStack>
            <Text color="#FFFFFF" fontSize={20} marginTop="$8" variant="title">
              Welcome Back!
            </Text>

            <Text
              color="#999999"
              fontSize={14}
              textAlign="center"
              marginBottom="$4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </YStack>

          <YStack marginTop="$8">
            <TextField
              label="Email"
              placeholder="example@example.com"
              marginBottom="$4"
              onChangeText={text => setEmail(text)}
              value={email}
            />

            <TextField
              label="Password"
              placeholder="enter password"
              marginBottom="$4"
              onChangeText={text => setPassword(text)}
              value={password}
            />

            <Text
              color="#FAF923"
              fontSize={14}
              textAlign="right"
              marginBottom="$4"
            >
              Forgot Password?
            </Text>

            <Button
              disabled={loading}
              onPress={() => signInWithEmail()}
              marginTop="$6"
              fontWeight="bold"
            >
              SIGN IN
            </Button>

            <Text
              color="#999999"
              fontSize={14}
              textAlign="center"
              marginVertical="$5"
            >
              or sign in with
            </Text>

            <XStack gap="$3" justifyContent="center">
              <YStack
                borderWidth={1}
                borderColor="#666"
                borderRadius="$2"
                padding="$2"
              >
                <Icon name="apple" size={28} />
              </YStack>

              {/* Google */}
              <YStack
                borderWidth={1}
                borderColor="#666"
                borderRadius="$2"
                padding="$2"
              >
                <Icon name="google" size={28} />
              </YStack>

              {/* Facebook */}
              <YStack
                borderWidth={1}
                borderColor="#666"
                borderRadius="$2"
                padding="$2"
              >
                <Icon name="facebook" size={28} />
              </YStack>
            </XStack>
          </YStack>
        </YStack>
        <YStack>
          <Text textAlign="center" color="#999999" fontSize={14}>
            Don&apos;t have an account?{' '}
            <Link href="/signup">
              <Text color="#DAF029">Sign Up</Text>
            </Link>
          </Text>
        </YStack>
      </YStack>
    </View>
  );
};

export default Login;
