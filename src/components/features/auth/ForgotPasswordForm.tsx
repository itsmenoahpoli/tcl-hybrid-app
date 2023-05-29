import React from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { COLORS } from "theme";

type Props = {};

export const ForgotPasswordForm: React.FC<Props> = (props) => {
	return (
		<View style={styles.formContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.inputBox} placeholder="E-mail or Username" />
				<Text style={styles.forgotPasswordInfo}>
					Please provide the e-mail or username associated with your account. An
					email will be sent to you containing instruction how to recover your
					account
				</Text>
			</View>

			<Pressable style={styles.forgotPasswordButton}>
				<Text style={styles.forgotPasswordButtonLabel}>Continue</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		marginTop: 15,
		paddingVertical: 15,
	},
	inputContainer: {
		width: "100%",
		position: "relative",
		marginBottom: 20,
	},
	inputBox: {
		fontFamily: "Lato-Regular",
		width: "100%",
		height: 45,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	forgotPasswordInfo: {
		fontFamily: "Lato-Regular",
		fontSize: 14,
		color: "#676767",
		lineHeight: 20,
		marginTop: 20,
	},
	forgotPasswordButton: {
		backgroundColor: COLORS.primary,
		width: "100%",
		height: 60,
		borderRadius: 20,
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	forgotPasswordButtonLabel: {
		fontSize: 16,
		fontFamily: "Lato-Regular",
		color: "#fff",
	},
});
