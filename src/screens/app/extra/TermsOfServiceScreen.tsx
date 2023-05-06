import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { BaseLayout } from "components";

export const TermsOfServiceScreen = () => {
	return (
		<BaseLayout hasBackButton isScrollable>
			<View style={styles.container}>
				<View style={styles.mainContent}>
					<Text style={styles.titleText}>Terms of Service</Text>
					<Text style={styles.textContent}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut in aliquid nesciunt modi, sunt deleniti
						dignissimos? Repellat voluptates, cum dolore nesciunt perferendis, fugiat distinctio placeat repellendus vel
						reprehenderit nemo qui esse quas, exercitationem eaque omnis assumenda veniam ipsa expedita et! Dolores ab
						at sed quasi voluptatum, natus earum reprehenderit est!
					</Text>
					<Text style={styles.textContent}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti cum rem! Cum, delectus quibusdam.
						Eveniet, nobis? Laboriosam autem ex vero dolorem veritatis ipsum nam voluptas. Asperiores, recusandae est.
						Ipsam, amet atque consectetur iusto placeat perspiciatis magnam quae aspernatur ratione rem eos. Dolore
						sequi mollitia temporibus maiores quae iure ex nulla. Recusandae itaque laborum ratione unde beatae aliquid
						alias. Porro, rerum optio nobis natus ratione molestias in quisquam voluptatibus velit sed adipisci? Velit,
						adipisci sed perferendis dignissimos, dolor ex id culpa sequi molestiae alias laboriosam quidem cum labore
						suscipit quas blanditiis nihil. Error, libero pariatur eos fuga sit nulla provident, porro, enim corporis
						optio deleniti vel excepturi! Magnam iusto necessitatibus in. Neque reiciendis voluptates aliquam, quaerat
						sint nemo at! Explicabo?
					</Text>
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
		marginBottom: 20,
	},
	textContent: {
		fontFamily: "Lato-Regular",
		fontSize: 15,
		lineHeight: 25,
		marginBottom: 30,
	},
});
