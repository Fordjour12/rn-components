import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const BeautifulTextInput = () => {
	const [text, setText] = useState("");

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Type something..."
				placeholderTextColor="#999"
				value={text}
				onChangeText={setText}
			/>
		</View>
	);
};

export const InputWithLabel = () => {
	const [text, setText] = useState("");

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Text style={styles.label}>Enter Your Text</Text>
				<TextInput
					style={styles.input}
					placeholder="Type something..."
					placeholderTextColor="#999"
					value={text}
					onChangeText={setText}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		padding: 20,
	},
	label: {
		alignSelf: "flex-start",
		fontSize: 16,
		color: "#333",
		marginBottom: 10,
	},
	input: {
		width: "100%",
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		paddingHorizontal: 15,
		fontSize: 16,
		color: "#333",
	},
	inputContainer: {
		width: "100%",
	},
});

// export default BeautifulTextInput;
