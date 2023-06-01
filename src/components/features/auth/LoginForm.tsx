import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { COLORS } from "theme";
import { StackParamsList } from "types/navigation";
import { TCredentials } from "types/auth";

type Props = {
	formType: "" | "fresh-login" | "remembered-login";
	handleSignIn: (credentials: TCredentials) => Promise<void>;
	username?: string;
};

export const LoginForm: React.FC<Props> = (props) => {
	// prettier-ignore
	const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
	const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
	const [form, setForm] = React.useState<TCredentials>({ email: "ppolicarpio@domain.com", password: "1234567890" });

	const togglePasswordVisibility = (): void => {
		setPasswordVisible((prevState) => !prevState);
	};

	const handleFormSubmit = async (): Promise<void> => {
		await props.handleSignIn(form);
	};

	const handleFormInput = (key: string, value: string) => {
		setForm({ ...form, [key]: value });
	};

	return (
		<View style={styles.formContainer}>
			{props.formType === "fresh-login" ? (
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.inputBox}
						placeholder="Email"
						defaultValue={form.email}
						onChangeText={(v) => handleFormInput("email", v)}
						autoCapitalize="none"
					/>
				</View>
			) : null}
			<View style={styles.inputContainer}>
				<TextInput
					secureTextEntry={!passwordVisible}
					style={styles.inputBox}
					placeholder="Password"
					defaultValue={form.password}
					onChangeText={(v) => handleFormInput("password", v)}
					autoCapitalize="none"
				/>
				<Pressable style={styles.togglePasswordVisibilityButton} onPress={togglePasswordVisibility}>
					<Text style={styles.togglePasswordVisibilityButtonLabel}>
						<Feather name={passwordVisible ? "eye" : "eye-off"} size={24} color="#898989" />
					</Text>
				</Pressable>
				<Pressable style={styles.forgotPasswordButton} onPress={() => navigation.navigate("FORGOT_PASSWORD_SCREEN")}>
					<Text style={styles.forgotPasswordButtonLabel}>Forgot Password?</Text>
				</Pressable>
			</View>
			<View style={styles.inputContainer}>
				<Pressable style={styles.loginButton} onPress={handleFormSubmit}>
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
		fontFamily: "Lato-Regular",
		color: COLORS.primary,
	},
	loginButton: {
		backgroundColor: COLORS.primary,
		width: "100%",
		height: 60,
		borderRadius: 20,
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
