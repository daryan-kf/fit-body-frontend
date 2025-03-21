import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider, Theme } from 'tamagui';
import tamaguiConfig from './tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
    <Theme name="light">
      <Theme name="blue">
        <View style={styles.container}>
          <Button>Button</Button> 
          <StatusBar style="auto" />
        </View>
      </Theme>
    </Theme>
  </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
