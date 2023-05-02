import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { BaseLayout } from "components";

export const LoginScreen: React.FC = () => {
  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text>LoginScreen</Text>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
