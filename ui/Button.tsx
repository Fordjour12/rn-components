import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonExamples = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => alert("Button Pressed")}
			>
				<Text style={styles.buttonText}>Button</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.buttonOutline}
				onPress={() => alert("Outline Button Pressed")}
			>
				<Text style={styles.buttonOutlineText}>Button Outline</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.buttonWithIcon}
				onPress={() => alert("Button with Icon Pressed")}
			>
				<FontAwesome
					name="check"
					size={20}
					color="#fff"
					style={styles.buttonIcon}
				/>
				<Text style={styles.buttonWithIconText}>Button With Icon</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		padding: 20,
	},
	button: {
		width: "100%",
		backgroundColor: "#6200ea",
		paddingVertical: 15,
		borderRadius: 10,
		alignItems: "center",
		marginBottom: 15,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	buttonOutline: {
		width: "100%",
		backgroundColor: "#fff",
		borderWidth: 2,
		borderColor: "#6200ea",
		paddingVertical: 15,
		borderRadius: 10,
		alignItems: "center",
		marginBottom: 15,
	},
	buttonOutlineText: {
		color: "#6200ea",
		fontSize: 16,
		fontWeight: "bold",
	},
	buttonWithIcon: {
		width: "100%",
		flexDirection: "row",
		backgroundColor: "#6200ea",
		paddingVertical: 15,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonIcon: {
		marginRight: 10,
	},
	buttonWithIconText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ButtonExamples;
