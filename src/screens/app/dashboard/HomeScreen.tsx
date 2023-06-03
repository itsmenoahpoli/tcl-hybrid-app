import React from "react";
import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

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
						<View style={styles.accountOverviewContainerBalanceContainerButtonContent}>
							<MaterialCommunityIcons name="arrow-bottom-left-thin-circle-outline" size={20} color="#fff" />
							<Text style={styles.accountOverviewContainerBalanceContainerButtonLabel}>Invest</Text>
						</View>
					</Pressable>
					<Pressable style={styles.accountOverviewContainerBalanceContainerButton}>
						<View style={styles.accountOverviewContainerBalanceContainerButtonContent}>
							<MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={20} color="#fff" />
							<Text style={styles.accountOverviewContainerBalanceContainerButtonLabel}>Widthdraw</Text>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const TransactionsList: React.FC = () => {
	return (
		<View style={styles.transactionsListContainer}>
			<Text style={styles.transactionsListContainerTitleText}>Transactions</Text>
			<View style={styles.transactionsListBox}>
				<View style={styles.transactionsListBoxItem}>
					<View>
						<Text style={styles.transactionsListBoxItemTitleText}>Invest</Text>
						<Text style={styles.transactionsListBoxItemText}>June 3, 2023 8:23PM</Text>
						<Text style={styles.transactionsListBoxItemText}>Pending</Text>
					</View>
					<View>
						<Text style={styles.transactionsListBoxItemTitleText}>+ 5,000.00</Text>
					</View>
				</View>
				<View style={styles.transactionsListBoxItem}>
					<View>
						<Text style={styles.transactionsListBoxItemTitleText}>Invest</Text>
						<Text style={styles.transactionsListBoxItemText}>June 7, 2023 10:51AM</Text>
						<Text style={styles.transactionsListBoxItemText}>Pending</Text>
					</View>
					<View>
						<Text style={styles.transactionsListBoxItemTitleText}>+ 18,000.00</Text>
					</View>
				</View>
				<View style={{ ...styles.transactionsListBoxItem, borderBottomWidth: 0 }}>
					<View>
						<Text style={styles.transactionsListBoxItemTitleText}>Invest</Text>
						<Text style={styles.transactionsListBoxItemText}>June 25, 2023 1:48PM</Text>
						<Text style={styles.transactionsListBoxItemText}>Pending</Text>
					</View>
					<View>
						<Text style={styles.transactionsListBoxItemTitleText}>+ 40,000.00</Text>
					</View>
				</View>
			</View>
			<Pressable style={styles.transactionsListViewAllTransactionsButton}>
				<Text style={styles.transactionsListViewAllTransactionsButtonLabel}>View All Transactions</Text>
			</Pressable>
		</View>
	);
};

const FooterNav: React.FC = () => {
	return <View style={styles.footerNav}></View>;
};

export const HomeScreen: React.FC = () => {
	return (
		<BaseLayout hasFooter>
			<View style={styles.container}>
				<HeaderNav />
				<AccountOverview />
				<TransactionsList />
			</View>
			<FooterNav />
		</BaseLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		paddingHorizontal: 20,
		backgroundColor: "#fcfcfc",
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
		color: "#333",
	},
	accountOverviewContainerBalanceContainer: {
		backgroundColor: "#eee",
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
		gap: 5,
	},
	accountOverviewContainerBalanceContainerButton: {
		backgroundColor: COLORS.primary,
		width: 160,
		paddingVertical: 13,
		paddingHorizontal: 13,
		borderRadius: 18,
	},
	accountOverviewContainerBalanceContainerButtonContent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
	accountOverviewContainerBalanceContainerButtonLabel: {
		fontFamily: "Lato-Regular",
		fontSize: 15,
		color: "#fff",
		textAlign: "center",
	},
	transactionsListContainer: {
		marginTop: 30,
		flex: 1,
	},
	transactionsListContainerTitleText: {
		fontFamily: "Lato-Bold",
		fontSize: 20,
		color: "#333",
		marginBottom: 10,
	},
	transactionsListBox: {
		backgroundColor: "#fff",
		height: "60%",
		display: "flex",
		flexDirection: "column",
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#eee",
		marginVertical: 10,
	},
	transactionsListBoxItem: {
		height: "33.3%",
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	transactionsListBoxItemTitleText: {
		fontFamily: "Lato-Bold",
		fontSize: 16,
	},
	transactionsListBoxItemText: {
		fontFamily: "Lato-Regular",
		fontSize: 15,
		marginTop: 4,
	},
	transactionsListViewAllTransactionsButton: {
		alignSelf: "center",
		marginTop: 20,
	},
	transactionsListViewAllTransactionsButtonLabel: {
		fontFamily: "Lato-Regular",
		fontSize: 16,
		color: "blue",
	},
	footerNav: {
		width: width,
		height: 80,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "#f1f1f1",
		borderTopColor: "#f1f1f1",
		borderTopWidth: 1,
	},
});
