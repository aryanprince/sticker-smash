import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from './Button'
import ImageViewer from './ImageViewer'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>StickerSmash!</Text>
      <ImageViewer />
      <Button label="Click me!" />
      <Text style={styles.footerText}>Built by Aryan</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
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
})
