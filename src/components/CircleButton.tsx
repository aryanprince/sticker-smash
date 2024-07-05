import { Feather } from '@expo/vector-icons'
import { Pressable, View } from 'react-native'

export default function CircleButton() {
  return (
    <View
      style={{
        padding: 3,
        borderRadius: 9999,
        borderWidth: 4,
        borderColor: '#fde047',
      }}
    >
      <Pressable
        style={{ backgroundColor: '#fff', borderRadius: 9999, padding: 12 }}
      >
        <Feather name="plus" size={36} />
      </Pressable>
    </View>
  )
}
