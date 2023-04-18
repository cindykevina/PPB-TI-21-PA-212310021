import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ItemTypograph } from "./src/component/ItemTypograph";
import { ImageItem } from "./src/component/ImageItem";
import Soal3 from "./src/component/Soal3";
import Soal4rcc from "./src/component/Soal4rcc";
import Soal4rfc from "./src/component/Soal4rfc";
import Soal2 from "./src/component/Soal2";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Soal4rfc/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
