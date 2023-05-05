import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout, LoginForm } from "components";
import { StackParamsList } from "types/navigation";

type Props = NativeStackScreenProps<StackParamsList, "FORGOT_PASSWORD_SCREEN">;

export const ForgotPasswordScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout hasBackButton>
      <View style={styles.container}>
        <View style={styles.mainContent}></View>
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
    paddingTop: "25%",
  },
});
