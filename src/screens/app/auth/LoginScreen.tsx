import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout, LoginForm } from "components";
import { StackParamsList } from "types/navigation";
import * as storage from "libs/async-storage.lib";

type Props = NativeStackScreenProps<StackParamsList, "LOGIN_SCREEN">;
type FormTypes = "" | "fresh-login" | "remembered-login";
type FormState = {
  username: string;
  password: string;
};

export const LoginScreen: React.FC<Props> = (props) => {
  const [formType, setFormType] = React.useState<FormTypes>("");
  const [form, setForm] = React.useState<FormState>({
    username: "",
    password: "",
  });

  const handleSignIn = async () => {
    //
  };

  const getSavedAccount = async (): Promise<void> => {
    await storage.getItem("username").then((r: any) => {
      if (r !== null && r.hasOwnProperty("username")) {
        setFormType("remembered-login");
        setForm({ ...form, username: r.username });

        return;
      }

      setFormType("fresh-login");
    });
  };

  React.useEffect(() => {
    getSavedAccount();
  }, []);

  return (
    <BaseLayout hasBackButton>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View
            style={
              formType === "remembered-login"
                ? styles.logo
                : styles.miniCenteredLogo
            }
          />

          {formType === "remembered-login" ? (
            <>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.titleText}>MF 006926</Text>
            </>
          ) : null}

          <LoginForm formType={formType} />
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
  miniCenteredLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ccc",
    alignSelf: "center",
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
  },
});
