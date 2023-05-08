import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout, BrandLogo, LoginForm } from "components";
import { StackParamsList } from "types/navigation";
import { Credentials } from "types/auth";
import * as storage from "libs/async-storage.lib";
import * as secure_data from "libs/secure-data.lib";

type Props = NativeStackScreenProps<StackParamsList, "LOGIN_SCREEN">;
type FormTypes = "" | "fresh-login" | "remembered-login";

export const LoginScreen: React.FC<Props> = (props) => {
	const [formType, setFormType] = React.useState<FormTypes>("");
	const [username, setUsername] = React.useState<string>("");

	const handleSignIn = async (credentials: Credentials): Promise<void> => {
		props.navigation.navigate("HOME_SCREEN");
	};

	const getSavedAccount = async (): Promise<void> => {
		await storage.getItem("@user").then((r: any) => {
			console.log(r);
			if (r !== null) {
				setFormType("remembered-login");
				setUsername(r.username);
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
					{formType === "fresh-login" ? (
						<View style={styles.centerLogo}>
							<BrandLogo type="submain" height={150} />
						</View>
					) : null}

					{formType === "remembered-login" ? (
						<>
							<View style={styles.avatar}>
								<Text style={styles.avatarLabel}>PP</Text>
							</View>
							<Text style={styles.welcomeText}>Welcome back,</Text>
							<Text style={styles.titleText}>
								{secure_data.maskName("Patrick") + " " + secure_data.maskName("Policarpio")}
							</Text>
						</>
					) : null}

					<LoginForm formType={formType} handleSignIn={handleSignIn} username={username} />
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
	centerLogo: {
		alignItems: "center",
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginBottom: 10,
		backgroundColor: "#5e0b24",
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	avatarLabel: {
		fontFamily: "Lato-Bold",
		fontSize: 18,
		color: "#fff",
	},
	welcomeText: {
		color: "#5c5c5c",
		fontSize: 18,
		fontFamily: "Lato-Bold",
		textAlign: "center",
		marginBottom: 5,
	},
	titleText: {
		color: "#464646",
		fontSize: 40,
		fontFamily: "Lato-Bold",
		textAlign: "center",
		marginBottom: 20,
	},
});
