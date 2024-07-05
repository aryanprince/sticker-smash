import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './components/HomeScreen'

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  )
}
