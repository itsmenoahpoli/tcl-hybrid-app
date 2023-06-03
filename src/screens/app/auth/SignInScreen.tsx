import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { BaseLayout } from "components";

export const SignInScreen = () => {
	return (
		<BaseLayout>
			<View style={styles.container}>
				<Text>Template Screen</Text>
			</View>
		</BaseLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
