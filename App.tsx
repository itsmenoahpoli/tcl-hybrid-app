import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AppNavigation } from "./src/navigation/AppNavigation";

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		"Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
		"Lato-ThinItalic": require("./assets/fonts/Lato-ThinItalic.ttf"),
		"Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
		"Lato-LightItalic": require("./assets/fonts/Lato-LightItalic.ttf"),
		"Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
		"Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
		"Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
		"Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
	});

	const onLayoutRootView = React.useCallback(() => {
		if (fontsLoaded) {
			setTimeout(async () => {
				await SplashScreen.hideAsync();
			}, 2000);
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <Text>Failed to load app assets</Text>;
	}

	return (
		<SafeAreaProvider>
			<View style={styles.container} onLayout={onLayoutRootView}>
				<AppNavigation />
			</View>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});

export default App;
