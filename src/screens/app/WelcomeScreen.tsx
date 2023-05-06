import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout, BrandLogo } from "components";
import { COLORS } from "theme";
import { StackParamsList } from "types/navigation";

type Props = NativeStackScreenProps<StackParamsList, "WELCOME_SCREEN">;

export const WelcomeScreen: React.FC<Props> = (props) => {
	return (
		<BaseLayout>
			<View style={styles.container}>
				<View style={styles.mainContent}>
					<BrandLogo type="submain" />
					{/* <View style={styles.logo} /> */}
					<Text style={styles.welcomeText}>Welcome to</Text>
					<Text style={styles.titleText}>The Coin Life</Text>
					<Text style={styles.subTitle}>Offers a wide range of investment opportunities</Text>
					<Text style={styles.subTitle}>to help you achieve your financial goals</Text>
					<View style={styles.buttonsContainer}>
						<Pressable style={styles.button} onPress={() => props.navigation.navigate("LOGIN_SCREEN")}>
							<Text style={styles.buttonLabel}>Login</Text>
						</Pressable>
						<Pressable style={styles.buttonRegister} onPress={() => props.navigation.navigate("REGISTER_SCREEN")}>
							<Text style={styles.buttonRegisterLabel}>Register</Text>
						</Pressable>
					</View>
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
		paddingHorizontal: 30,
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
		fontFamily: "Lato-Regular",
		marginBottom: 8,
	},
	titleText: {
		color: "#464646",
		fontSize: 38,
		fontFamily: "Lato-Black",
		marginBottom: 20,
	},
	subTitle: {
		color: "#7c7c7c",
		fontSize: 16,
		fontFamily: "Lato-Regular",
		marginBottom: 8,
	},
	buttonsContainer: {
		width: "100%",
		marginTop: 80,
		alignItems: "center",
	},
	button: {
		backgroundColor: COLORS.primary,
		width: "100%",
		height: 60,
		borderRadius: 15,
		marginBottom: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonLabel: {
		fontSize: 16,
		fontFamily: "Lato-Bold",
		color: "#fff",
	},
	buttonRegister: {
		backgroundColor: "#fcfcfc",
		width: "100%",
		height: 60,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#eee",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#ccc",
		shadowOffset: {
			width: 0,
			height: 0.5,
		},
		shadowOpacity: 1,
		shadowRadius: 1,

		elevation: 2,
	},
	buttonRegisterLabel: {
		fontSize: 16,
		fontFamily: "Lato-Bold",
		color: "#464646",
	},
});
