import { Feather } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

export default function IconButton({
  label,
  icon,
}: {
  label: string
  icon: React.ReactNode
}) {
  return (
    <View style={{}}>
      <Pressable
        style={{ flexDirection: 'column', gap: 12, alignItems: 'center' }}
      >
        {icon}
        <Text style={{ color: '#fff' }}>{label}</Text>
      </Pressable>
    </View>
  )
}
