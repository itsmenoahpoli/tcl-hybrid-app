import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout, BrandLogo, LoginForm } from "components";
import { AuthService } from "services";
import { StackParamsList } from "types/navigation";
import { TCredentials } from "types/auth";
import * as storage from "libs/async-storage.lib";
import * as secure_data from "libs/secure-data.lib";

type Props = NativeStackScreenProps<StackParamsList, "LOGIN_SCREEN">;
type FormTypes = "" | "fresh-login" | "remembered-login";
const AUTH_SERVICE = new AuthService();

export const LoginScreen: React.FC<Props> = (props) => {
	const [formType, setFormType] = React.useState<FormTypes>("");
	const [name, setName] = React.useState<string>("");

	const handleSignIn = async (credentials: TCredentials): Promise<void> => {
		await AUTH_SERVICE.login(credentials).then((result) => {
			if (result.isAuthSuccess) {
				props.navigation.navigate("HOME_SCREEN");
			}
		});
	};

	const getSavedAccount = async (): Promise<void> => {
		await storage.getItem("@user").then((r: any) => {
			if (r !== null) {
				setFormType("remembered-login");
				setName(r.name);

				props.navigation.navigate("HOME_SCREEN");
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
						<React.Fragment>
							<View style={styles.avatar}>
								<Text style={styles.avatarLabel}>PP</Text>
							</View>
							<Text style={styles.welcomeText}>Welcome back,</Text>
							<Text style={styles.titleText}>
								{secure_data.maskName("Patrick") + " " + secure_data.maskName("Policarpio")}
							</Text>
						</React.Fragment>
					) : null}

					<LoginForm formType={formType} handleSignIn={handleSignIn} />
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
