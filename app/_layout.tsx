// app/_layout.tsx
import { Slot } from 'expo-router';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import * as Font from 'expo-font';

export default function Layout() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Slot /> {/* 👈 this renders the current screen */}
    </TamaguiProvider>
  );
}
