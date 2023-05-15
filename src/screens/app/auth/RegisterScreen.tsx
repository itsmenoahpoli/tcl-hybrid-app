import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BaseLayout, RegisterForm } from "components";
import { StackParamsList } from "types/navigation";

type Props = NativeStackScreenProps<StackParamsList, "REGISTER_SCREEN">;

export const RegisterScreen: React.FC<Props> = (props) => {
	const onRegisterHandler = (data: any) => {
		//
	};

	return (
		<BaseLayout hasBackButton>
			<View style={styles.container}>
				<View style={styles.mainContent}>
					<Text style={styles.titleText}>Register</Text>
					<RegisterForm />
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
		paddingTop: "10%",
	},
	titleText: {
		fontFamily: "Lato-Bold",
		fontSize: 30,
	},
});
