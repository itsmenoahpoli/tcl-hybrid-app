import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

import { StackParamsList } from "types/navigation";

type Props = {
	children: React.ReactNode;
	hasBackButton?: boolean;
	hasFooter?: boolean;
	isScrollable?: boolean;
};

const { height, width } = Dimensions.get("screen");

export const BaseLayout = (props: Props) => {
	const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
	const mainContainerStyles = { ...styles.container, height: props.hasFooter ? height - 80 : height };

	const handleGoBack = (): void => {
		navigation.goBack();
	};

	return (
		<React.Fragment>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" backgroundColor="#fcfcfc" />
				<ScrollView scrollEnabled={props.isScrollable ?? false}>
					{/* <View style={styles.alertBannerContainer}>
						<Text style={styles.alertBannerContainerText}>Account not yet verified</Text>
					</View> */}
					<View style={mainContainerStyles}>
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
		position: "relative",
	},
	scrollContainer: {
		marginBottom: 30,
	},
	backContainer: {
		paddingTop: 30,
		paddingHorizontal: 20,
	},
	// alertBannerContainer: {
	// 	height: 30,
	// 	width: width,
	// 	backgroundColor: "lightcoral",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// },
	// alertBannerContainerText: {
	// 	fontFamily: "Lato-Regular",
	// 	fontSize: 15,
	// 	color: "#fff",
	// },
});
