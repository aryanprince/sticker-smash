import { Image, StyleSheet } from 'react-native'

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function ImageViewer({
  selectedImage,
}: {
  selectedImage?: string
}) {
  const imageSource = selectedImage ? { uri: selectedImage } : PlaceholderImage

  return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
