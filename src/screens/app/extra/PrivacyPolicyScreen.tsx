import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { BaseLayout } from "components";

export const PrivacyPolicyScreen = () => {
	return (
		<BaseLayout hasBackButton isScrollable>
			<View style={styles.container}>
				<View style={styles.mainContent}>
					<Text style={styles.titleText}>Privacy Policy</Text>
					<Text style={styles.textContent}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ratione voluptas temporibus non amet
						nihil mollitia! Expedita voluptates quo magni? Beatae, earum quod. Repellat rem quas ipsam obcaecati, nihil,
						laborum temporibus assumenda minus dolores itaque sed reiciendis ratione quae ullam nemo. Tenetur eum
						provident et, laudantium error laborum repudiandae commodi, numquam illum enim temporibus recusandae soluta
						perferendis dignissimos nesciunt quasi totam? Sint animi expedita sit repellat asperiores ea quod molestiae
						iure labore dignissimos minima tempora hic ullam vel, ab nam perferendis ipsum aperiam, cumque aliquid est
						delectus. Sed magnam quis mollitia. Asperiores veniam dolorem modi voluptates, rem minima libero dolorum!
					</Text>
					<Text style={styles.textContent}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem aut, voluptate fugiat est nesciunt dolor
						eaque aperiam sapiente rem doloribus ducimus, fugit, possimus aspernatur eligendi aliquam nemo quasi quas
						ad.
					</Text>

					<Text style={styles.textContent}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit consequuntur ullam atque illum,
						in obcaecati eum, iure corrupti ratione error ea quis? Dolores quia optio qui, recusandae dolore voluptate
						sit corporis adipisci nesciunt magni atque fugit ratione nihil, iusto placeat iste consequuntur
						reprehenderit voluptatem distinctio quos vero tempora voluptatibus nostrum. Ab maiores asperiores voluptatem
						vitae obcaecati iure laudantium, eaque quam magnam perferendis deleniti ipsam? Dolorum qui iure quae cumque,
						magnam perferendis praesentium excepturi minus quam, odit reiciendis. Illum voluptatum placeat nemo
						assumenda nisi enim accusamus, veniam eius cumque quidem tenetur repellat aut id laborum unde necessitatibus
						doloribus tempore? Voluptate quis quos natus placeat incidunt molestias quaerat qui obcaecati dolorum
						tempore quas quam culpa, eligendi, nihil at voluptatem, officiis ab? Quod tempore, similique recusandae quam
						sit provident, rem aspernatur labore iste ut accusantium ipsum modi atque adipisci quis velit! Quidem,
						dolores. Itaque amet vitae necessitatibus voluptatibus ducimus optio quo sit. Consectetur accusantium
						aperiam at, totam, sit ab sed saepe rerum unde minima deleniti porro quae nisi, perferendis architecto
						sapiente voluptatum commodi dolorum aut! Perferendis, necessitatibus!
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
		color: "#565656",
		lineHeight: 25,
		marginBottom: 30,
	},
});
