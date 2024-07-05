import * as ImagePicker from 'expo-image-picker'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import Button from './Button'
import CircleButton from './CircleButton'
import EmojiPicker from './EmojiPicker'
import IconButton from './IconButton'
import ImageViewer from './ImageViewer'

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    result.canceled && alert('You did not select any image.')

    if (result.assets) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    }
  }

  const onSaveImage = () => {
    // TODO: Yet to implement
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.headerText}>StickerSmash!</Text>

      {/* CONTENT */}
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

        {/* MENU 1 - SELECT PHOTO */}
        {!showAppOptions && (
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Button
              label="Choose a photo"
              variant="primary"
              onPress={pickImageAsync}
            />
            <Button
              label="Use this photo"
              variant="secondary"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}

        {/* MENU 2 - EDIT PHOTO & ADD EMOJIS */}
        {!!showAppOptions && (
          <View style={{ flexDirection: 'column', gap: 32 }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 16,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* BACK BUTTON */}
              <IconButton
                label="Reset"
                icon={<Feather name="rotate-cw" size={24} color="#fff" />}
                onPress={() => {
                  setShowAppOptions(false)
                }}
              />

              {/* ADD NEW STICKER, OPENS MODAL */}
              <CircleButton onPress={() => setIsModalVisible(true)} />

              {/* SAVE BUTTON */}
              <IconButton
                label="Save"
                icon={<Feather name="download" size={24} color="#fff" />}
                onPress={onSaveImage}
              />
            </View>

            {/* BACK BUTTON */}
            <Button
              variant="custom-icon"
              label="Select new pic"
              icon={<AntDesign name="back" size={24} color="#fff" />}
              onPress={() => setShowAppOptions(false)}
            />
          </View>
        )}
      </View>
      {/* END OF CONTENT */}

      {/* FOOTER */}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false)
        }}
      >
        <Feather name="download" size={24} color="#fff" />
      </EmojiPicker>
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
