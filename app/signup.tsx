import { Link } from 'expo-router';
import { View, YStack, XStack } from 'tamagui';
import { TextField, Button, Icon, Text } from '@/components';
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
            Create Account
          </Text>
        </XStack>
        <YStack>
          <YStack>
            <Text color="#FFFFFF" fontSize={20} marginTop="$8" variant="title">
              Welcome!
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
              label="Full Name"
              placeholder="Full Name"
              marginBottom="$3"
              onChangeText={text => setFullName(text)}
              value={fullName}
            />
            <TextField
              label="Email"
              placeholder="example@example.com"
              marginBottom="$3"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <TextField
              label="Password"
              placeholder="enter password"
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <Text margin="$8" textAlign="center">
              By Signing up, you agree to{' '}
              <Text variant="link">Terms Of Use</Text> and{' '}
              <Text variant="link">Privacy Policies</Text>
            </Text>
            <Button
              marginBottom="$2"
              disabled={loading}
              onPress={() => signUpWithEmail()}
            >
              SIGN UP
            </Button>

            <Text
              color="#999999"
              fontSize={14}
              textAlign="center"
              marginVertical="$5"
            >
              or sign up with
            </Text>
          </YStack>
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
        <YStack>
          <Text textAlign="center" color="#999999" fontSize={14}>
            Already have an account?{' '}
            <Link href="/login">
              <Text color="#DAF029">Log in</Text>
            </Link>
          </Text>
        </YStack>
      </YStack>
    </View>
  );
};

export default Signup;
