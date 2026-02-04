import { Text, View } from "react-native";
import RegisterScreen from "../app/(auth)/register";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegisterScreen></RegisterScreen>
    </View>
  );
}
