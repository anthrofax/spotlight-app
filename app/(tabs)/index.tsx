import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
      }}
    >
      <Text >Welcome Home!</Text>

    </View>
  )
}