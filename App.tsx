import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";

const {Screen, Navigator} = createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Home" component={Home} />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
