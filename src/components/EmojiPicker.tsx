import { Feather } from '@expo/vector-icons'
import { Modal, Pressable, Text, View } from 'react-native'

export default function EmojiPicker({
  isVisible,
  onClose,
  children,
}: {
  isVisible: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      {/* MODAL: FULL CONTENT */}
      <View
        style={{
          height: '30%',
          width: '100%',
          backgroundColor: '#0a0a0a',
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          position: 'absolute',
          bottom: 0,
        }}
      >
        {/* MODAL: TITLE HEADER + CLOSE BUTTON */}
        <View
          style={{
            height: '16%',
            backgroundColor: '#171717',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 16, color: '#f5f5f5' }}>
            Choose a sticker
          </Text>
          <Pressable onPress={onClose}>
            <Feather name="x" color="#fff" size={22} />
          </Pressable>
        </View>

        {/* LIST OF EMOJIS */}
        {children}
      </View>
    </Modal>
  )
}
