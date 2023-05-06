import React from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { COLORS } from "theme";

type Props = {};

export const RegisterForm: React.FC<Props> = (props) => {
	const [isAgreed, setIsAgreed] = React.useState<boolean>(false);

	const handleAgreed = (): void => {
		setIsAgreed((prevState) => !prevState);
	};

	return (
		<View style={styles.formContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.inputBox} placeholder="Name" />
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.inputBox} placeholder="Email" />
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.inputBox} placeholder="Phone Number" />
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.inputBox} placeholder="Wallet Address" />
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.inputBox} placeholder="Password" />
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.inputBox} placeholder="Confirm Password" />
			</View>
			<View
				style={{ ...styles.inputContainer, ...styles.inputContainerCheckbox }}
			>
				<BouncyCheckbox
					fillColor="#464646"
					unfillColor="#fff"
					size={20}
					innerIconStyle={{ borderRadius: 4 }}
					iconImageStyle={{ borderRadius: 4 }}
					iconStyle={{ borderRadius: 4 }}
					isChecked={isAgreed}
					onPress={handleAgreed}
				/>
				<Text style={styles.inputContainerCheckboxLabel}>
					I have read and agree to TCL's Term of Service and Privacy Policy
				</Text>
			</View>

			<Pressable style={styles.registerButton}>
				<Text style={styles.registerButtonLabel}>Continue</Text>
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
	inputContainerCheckbox: {
		display: "flex",
		flexDirection: "row",
		paddingRight: 10,
	},
	inputContainerCheckboxLabel: {
		fontSize: 14,
		fontFamily: "Lato-Regular",
		color: "#464646",
		flex: 1,
		flexWrap: "wrap",
	},
	inputBox: {
		fontFamily: "Lato-Regular",
		width: "100%",
		height: 45,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	registerButton: {
		backgroundColor: COLORS.primary,
		width: "100%",
		height: 60,
		borderRadius: 20,
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	registerButtonLabel: {
		fontSize: 16,
		fontFamily: "Lato-Regular",
		color: "#fff",
	},
});
