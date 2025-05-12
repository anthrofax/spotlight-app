import { styles } from '@/styles/auth.style';
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Hello world!</Text>
      <TouchableOpacity onPress={() => alert('Hello world!')}>
        <Text >Click me!</Text>
      </TouchableOpacity>
      <Image source={{
        uri: 'https://images.unsplash.com/photo-1726137570589-4461351d1180?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 1 / 2,
        }}
      />
    </View>
  )
}