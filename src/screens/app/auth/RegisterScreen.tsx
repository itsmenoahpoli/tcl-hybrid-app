import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const RegisterScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
