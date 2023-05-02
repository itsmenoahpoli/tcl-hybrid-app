import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

export const BaseLayout = (props: Props) => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>{props.children}</View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
