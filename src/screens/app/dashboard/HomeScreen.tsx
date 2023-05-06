import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { BaseLayout } from "components";

export const HomeScreen: React.FC = () => {
	return (
		<BaseLayout>
			<View style={styles.container}>
				<Text>HomeScreen</Text>
			</View>
		</BaseLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
