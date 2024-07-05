import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Button({
  label,
  variant = 'primary',
  onPress,
}: {
  label: string
  variant?: 'primary' | 'secondary'
  onPress?: () => void
}) {
  if (variant === 'primary') {
    return (
      <View>
        <Pressable style={styles.primaryButtonContainer} onPress={onPress}>
          <FontAwesome name="photo" size={16} />
          <Text style={styles.primaryButtonLabel}>{label}</Text>
        </Pressable>
      </View>
    )
  } else if (variant === 'secondary') {
    return (
      <View>
        <Pressable
          style={styles.secondaryButtonContainer}
          onPress={() => alert('You pressed a button.')}
        >
          <FontAwesome name="arrow-right" size={18} color="#fff" />
          <Text style={styles.secondaryButtonLabel}>{label}</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  primaryButtonContainer: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
  },
  primaryButtonLabel: {
    color: '#171717',
    fontSize: 18,
  },
  secondaryButtonContainer: {
    backgroundColor: '#262626',
    borderColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
  },
  secondaryButtonLabel: {
    color: '#f5f5f5',
    fontSize: 18,
  },
})
