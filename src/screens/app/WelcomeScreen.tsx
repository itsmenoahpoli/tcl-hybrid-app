import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
