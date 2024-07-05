import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Button({ label }: { label: string }) {
  return (
    <View>
      <Pressable onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonLabel: {
    color: '#f5f5f5',
  },
})
