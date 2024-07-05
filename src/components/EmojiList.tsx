import { useState } from 'react'
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
} from 'react-native'

export default function EmojiList({
  onSelect,
  onCloseModal,
}: {
  onSelect: (item: ImageSourcePropType) => void
  onCloseModal: () => void
}) {
  const [emoji] = useState([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
  ])

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={{ flexDirection: 'row', gap: 16, padding: 24 }}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item)
            onCloseModal()
          }}
        >
          <Image
            source={item}
            key={index}
            style={{ width: 100, height: 100 }}
          />
        </Pressable>
      )}
    ></FlatList>
  )
}
