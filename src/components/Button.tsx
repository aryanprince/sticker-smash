import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Button({
  label,
  variant = 'primary',
}: {
  label: string
  variant?: 'primary' | 'secondary'
}) {
  if (variant === 'primary') {
    return (
      <View>
        <Pressable
          style={styles.primaryButtonContainer}
          onPress={() => alert('You pressed a button.')}
        >
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
  },
  primaryButtonLabel: {
    color: '#171717',
    fontSize: 18,
  },
  secondaryButtonContainer: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonLabel: {
    color: '#f5f5f5',
    fontSize: 18,
  },
})
