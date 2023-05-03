import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  formType: "" | "fresh-login" | "remembered-login";
};

export const LoginForm: React.FC<Props> = (props) => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <View style={styles.formContainer}>
      {props.formType === "fresh-login" ? (
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputBox} placeholder="Username" />
        </View>
      ) : null}
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={!passwordVisible}
          style={styles.inputBox}
          placeholder="Password"
        />
        <Pressable
          style={styles.togglePasswordVisibilityButton}
          onPress={togglePasswordVisibility}
        >
          <Text style={styles.togglePasswordVisibilityButtonLabel}>
            <Feather
              name={passwordVisible ? "eye" : "eye-off"}
              size={24}
              color="#898989"
            />
          </Text>
        </Pressable>
        <Pressable style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonLabel}>Forgot?</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonLabel}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 15,
  },
  inputContainer: {
    width: "100%",
    position: "relative",
    marginBottom: 10,
  },
  inputBox: {
    fontFamily: "Lato-Regular",
    width: "100%",
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  togglePasswordVisibilityButton: {
    position: "absolute",
    right: 10,
    top: 13,
  },
  togglePasswordVisibilityButtonLabel: {},
  forgotPasswordButton: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  forgotPasswordButtonLabel: {
    color: "#77a6f2",
    fontFamily: "Lato-Regular",
  },
  loginButton: {
    backgroundColor: "#464646",
    width: "100%",
    height: 50,
    borderRadius: 8,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonLabel: {
    fontSize: 16,
    fontFamily: "Lato-Regular",
    color: "#fff",
  },
});
