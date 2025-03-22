/* eslint-disable @typescript-eslint/no-require-imports */
import { Slot } from 'expo-router';
import { TamaguiProvider, View, styled } from 'tamagui';
import config from '../tamagui.config';
import { useFonts } from 'expo-font';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  const [loaded] = useFonts({
    Poppins: require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#101010' }}>
          <StyledView>
            <Slot />
          </StyledView>
        </SafeAreaView>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}

const StyledView = styled(View, {
  flex: 1,
  backgroundColor: '#101010',
  alignItems: 'center',
  justifyContent: 'center'
});
