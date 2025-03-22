import 'react-native-url-polyfill/auto';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { View, Text, YStack } from 'tamagui';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';

import backgroundImage from '@/assets/background-images/home-background.avif';
import { ImageBackground } from 'react-native';

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
        backgroundColor="rgba(0, 0, 0, 0.5)" // 50% opacity black overlay
        justifyContent="center"
        alignItems="center"
      >
        <YStack justifyContent="center" alignItems="center" padding="40px">
          <Text>Home Screen</Text>
          <Link href="/login">
            <Text>Login</Text>
          </Link>
          <Link href="/signup">
            <Text>Signup</Text>
          </Link>
        </YStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
