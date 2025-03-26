import { ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { View, YStack } from 'tamagui';
import 'react-native-url-polyfill/auto';

import { Text } from '@/components';

import backgroundImage from '@/assets/background-images/home-background.avif';

import { useGetLoggedInUser } from '@/services/api/queries';

const Home = () => {
  const { session } = useGetLoggedInUser();
  console.log({ session });

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
