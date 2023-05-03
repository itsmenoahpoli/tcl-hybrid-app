import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout } from "components";
import { StackParamsList } from "types/navigation";

type Props = NativeStackScreenProps<StackParamsList, "LOGIN_SCREEN">;

export const LoginScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.titleText}>MF 006926</Text>

          <View style={styles.formContainer}></View>
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
    paddingTop: "25%",
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#ccc",
    marginBottom: 30,
  },
  welcomeText: {
    color: "#5c5c5c",
    fontSize: 28,
    fontFamily: "Lato-Bold",
  },
  titleText: {
    color: "#464646",
    fontSize: 40,
    fontFamily: "Lato-Black",
    marginTop: 10,
    marginBottom: 30,
  },
  formContainer: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 20,
  },
});
