import * as ImagePicker from 'expo-image-picker'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useState } from 'react'
import Button from './Button'
import ImageViewer from './ImageViewer'

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState<string>('')

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    result.canceled && alert('You did not select any image.')

    result.assets && setSelectedImage(result.assets[0].uri)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>StickerSmash!</Text>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 50,
        }}
      >
        <ImageViewer selectedImage={selectedImage} />
        <View style={{ flexDirection: 'column', gap: 12 }}>
          <Button
            label="Choose a photo"
            variant="primary"
            onPress={pickImageAsync}
          />
          <Button label="Use this photo" variant="secondary" />
        </View>
      </View>
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
    fontSize: 40,
    fontWeight: '700',
    paddingTop: 30,
  },
  footerText: {
    color: '#a3a3a3',
    fontSize: 16,
    fontWeight: '500',
  },
})
