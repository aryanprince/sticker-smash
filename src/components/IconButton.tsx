import { Pressable, Text } from 'react-native'

export default function IconButton({
  label,
  icon,
  onPress,
}: {
  label: string
  icon: React.ReactNode
  onPress?: () => void
}) {
  return (
    <Pressable
      style={{ flexDirection: 'column', gap: 12, alignItems: 'center' }}
      onPress={onPress}
    >
      {icon}
      <Text style={{ color: '#fff' }}>{label}</Text>
    </Pressable>
  )
}
