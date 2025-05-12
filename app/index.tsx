import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/auth.style';
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <Redirect href={'/(tabs)'} />
  );
}
