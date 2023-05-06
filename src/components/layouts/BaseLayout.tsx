import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

import { StackParamsList } from "types/navigation";

type Props = {
	children: React.ReactNode;
	hasBackButton?: boolean;
	isScrollable?: boolean;
};

export const BaseLayout = (props: Props) => {
	const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

	const handleGoBack = (): void => {
		navigation.goBack();
	};

	return (
		<React.Fragment>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				<ScrollView scrollEnabled={props.isScrollable ?? false}>
					<View style={styles.container}>
						{props.hasBackButton ? (
							<View style={styles.backContainer}>
								<Pressable onPress={handleGoBack}>
									<MaterialIcons name="keyboard-arrow-left" size={30} color="#464646" />
								</Pressable>
							</View>
						) : null}
						{props.children}
					</View>
				</ScrollView>
			</SafeAreaView>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	scrollContainer: {
		marginBottom: 30,
	},
	backContainer: {
		paddingTop: 30,
		paddingHorizontal: 20,
	},
});
