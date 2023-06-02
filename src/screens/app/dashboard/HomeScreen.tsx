import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { BaseLayout } from "components";

const HeaderNav: React.FC = () => {
	return (
		<View style={styles.headerNav}>
			<View style={styles.avatar}>
				<Text style={styles.avatarLabel}>PP</Text>
			</View>

			<View style={styles.headerNavActions}>
				<Pressable style={styles.headerNavActionButton}>
					<FontAwesome name="envelope-o" color="#262626" size={36} />
					<Text style={styles.headerNavActionButtonLabel}>Inbox</Text>
				</Pressable>
				<Pressable style={styles.headerNavActionButton}>
					<MaterialIcons name="logout" color="#262626" size={36} />
					<Text style={styles.headerNavActionButtonLabel}>Logout</Text>
				</Pressable>
			</View>
		</View>
	);
};

const AccountOverview: React.FC = () => {
	return (
		<View style={styles.accountOverviewContainer}>
			<Text style={styles.accountOverviewContainerTitleText}>Account</Text>
			<View style={styles.accountOverviewContainerBalanceContainer}></View>
		</View>
	);
};

const TransactionsList: React.FC = () => {
	return <View></View>;
};

const FooterNav: React.FC = () => {
	return <View style={styles.footerNav}></View>;
};

export const HomeScreen: React.FC = () => {
	return (
		<BaseLayout>
			<View style={styles.container}>
				<HeaderNav />
				<AccountOverview />
				<TransactionsList />
				{/* <FooterNav /> */}
			</View>
		</BaseLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: "#fcfcfc",
		position: "relative",
	},
	headerNav: {
		height: 80,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	avatar: {
		height: 60,
		width: 60,
		borderRadius: 10,
		backgroundColor: "#7a0733",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
	avatarLabel: {
		fontFamily: "Lato-Bold",
		fontSize: 30,
		color: "#fff",
	},
	headerNavActions: {
		display: "flex",
		flexDirection: "row",
		gap: 30,
	},
	headerNavActionButton: {
		width: 50,
		alignItems: "center",
	},
	headerNavActionButtonLabel: {
		fontFamily: "Lato-Regular",
		fontSize: 13,
		color: "#666",
	},
	accountOverviewContainer: {
		marginTop: 30,
	},
	accountOverviewContainerTitleText: {
		fontFamily: "Lato-Regular",
		fontSize: 24,
	},
	accountOverviewContainerBalanceContainer: {
		backgroundColor: "#eee",
		height: 200,
		marginTop: 20,
		paddingVertical: 20,
		paddingHorizontal: 15,
		borderRadius: 13,
	},
	footerNav: {
		width: "100%",
		height: 70,
		position: "absolute",
		bottom: 0,
		backgroundColor: "#fff",
	},
});
