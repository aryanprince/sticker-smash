import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import PlaceholderImage from './assets/images/background-image.png'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>StickerSmash</Text>
        <Image source={PlaceholderImage} style={styles.image} />
        <Text style={styles.footerText}>Built by Aryan</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0a0a0a',
    gap: 16,
  },
  headerText: {
    color: '#f5f5f5',
    fontSize: 32,
    fontWeight: '700',
  },
  footerText: {
    color: '#a3a3a3',
    fontSize: 16,
    fontWeight: '500',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
