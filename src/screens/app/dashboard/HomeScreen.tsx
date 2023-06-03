import React from "react";
import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { BaseLayout } from "components";
import { COLORS } from "theme";

const { height, width } = Dimensions.get("window");

const HeaderNav: React.FC = () => {
	return (
		<View style={styles.headerNav}>
			<View style={styles.avatar}>
				<Text style={styles.avatarLabel}>PP</Text>
			</View>

			<View style={styles.headerNavActions}>
				<Pressable style={styles.headerNavActionButton}>
					<FontAwesome name="envelope-o" color="#888" size={24} />
					<Text style={styles.headerNavActionButtonLabel}>Inbox</Text>
				</Pressable>
				<Pressable style={styles.headerNavActionButton}>
					<MaterialIcons name="logout" color="#888" size={24} />
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
			<View style={styles.accountOverviewContainerBalanceContainer}>
				<Text style={styles.accountOverviewContainerBalanceContainerTitleText}>Available Balance</Text>
				<Text style={styles.accountOverviewContainerBalanceContainerBalanceText}>₱ 0.00</Text>

				<View style={styles.accountOverviewContainerButtonsContainer}>
					<Pressable style={styles.accountOverviewContainerBalanceContainerButton}>
						<Text style={styles.accountOverviewContainerBalanceContainerButtonLabel}>Invest</Text>
					</Pressable>
					<Pressable style={styles.accountOverviewContainerBalanceContainerButton}>
						<Text style={styles.accountOverviewContainerBalanceContainerButtonLabel}>Widthdraw</Text>
					</Pressable>
				</View>
			</View>
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
		height: "100%",
		paddingHorizontal: 20,
		backgroundColor: "#fcfcfc",
		position: "relative",
	},
	headerNav: {
		height: 80,
		paddingHorizontal: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	avatar: {
		height: 55,
		width: 55,
		borderRadius: 5,
		backgroundColor: "#7a0733",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
	avatarLabel: {
		fontFamily: "Lato-Bold",
		fontSize: 24,
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
		color: "#242424",
		marginTop: 5,
	},
	accountOverviewContainer: {
		marginTop: 30,
	},
	accountOverviewContainerTitleText: {
		fontFamily: "Lato-Bold",
		fontSize: 20,
		color: "#555",
	},
	accountOverviewContainerBalanceContainer: {
		backgroundColor: "#f1f1f1",
		height: 200,
		marginTop: 10,
		paddingVertical: 20,
		paddingHorizontal: 15,
		borderRadius: 13,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	accountOverviewContainerBalanceContainerTitleText: {
		fontFamily: "Lato-Regular",
		fontSize: 16,
	},
	accountOverviewContainerBalanceContainerBalanceText: {
		fontFamily: "Lato-Bold",
		fontSize: 30,
	},
	accountOverviewContainerButtonsContainer: {
		marginTop: 20,
		display: "flex",
		flexDirection: "row",
		gap: 15,
	},
	accountOverviewContainerBalanceContainerButton: {
		backgroundColor: COLORS.primary,
		width: 160,
		paddingVertical: 13,
		paddingHorizontal: 13,
		borderRadius: 20,
	},
	accountOverviewContainerBalanceContainerButtonLabel: {
		fontFamily: "Lato-Regular",
		fontSize: 15,
		color: "#fff",
		textAlign: "center",
	},
	footerNav: {
		width: width,
		height: 70,
		position: "absolute",
		bottom: 0,
		backgroundColor: "#ccc",
		borderTopColor: "#ccc",
		borderTopWidth: 1,
	},
});
