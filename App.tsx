import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppNavigation } from "./src/navigation/AppNavigation";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <AppNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
