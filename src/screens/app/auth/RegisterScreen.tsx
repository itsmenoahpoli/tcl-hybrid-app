import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout, LoginForm } from "components";
import { StackParamsList } from "types/navigation";

type Props = NativeStackScreenProps<StackParamsList, "REGISTER_SCREEN">;

export const RegisterScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout hasBackButton>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.titleText}>Register</Text>
        </View>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: "10%",
  },
  titleText: {
    fontFamily: "Lato-Bold",
    fontSize: 30,
  },
});
