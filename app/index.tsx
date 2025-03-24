import { useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { View, YStack } from 'tamagui';
import 'react-native-url-polyfill/auto';

import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

import { Text } from '@/components';

import backgroundImage from '@/assets/background-images/home-background.avif';

const Home = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log({ LoggedInUserEmail: session?.user.email });

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, width: '100%', height: '100%' }}
    >
      <View
        flex={1}
        backgroundColor="rgba(0, 0, 0, 0.8)"
        justifyContent="center"
        alignItems="center"
      >
        <YStack justifyContent="center" alignItems="center" padding="40px">
          <Text>Welcome to</Text>
          <Text variant="title">FitBody</Text>

          <Link href="/login">
            <Text variant="link">Login</Text>
          </Link>
          <Text>or</Text>
          <Link href="/signup">
            <Text variant="link">Signup</Text>
          </Link>
        </YStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
