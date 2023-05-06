import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout, ForgotPasswordForm } from "components";
import { StackParamsList } from "types/navigation";

type Props = NativeStackScreenProps<StackParamsList, "FORGOT_PASSWORD_SCREEN">;

export const ForgotPasswordScreen: React.FC<Props> = (props) => {
	return (
		<BaseLayout hasBackButton>
			<View style={styles.container}>
				<View style={styles.mainContent}>
					<Text style={styles.titleText}>Forgot Password?</Text>
					<ForgotPasswordForm />
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
	titleText: {
		fontFamily: "Lato-Bold",
		fontSize: 30,
	},
});
