import { Link } from 'expo-router';
import { View, Text, YStack } from 'tamagui';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
  );
};

export default Home;
