import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const MultilineTextInput = () => {
	const [text, setText] = useState("");

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Your Message</Text>
			<TextInput
				style={styles.input}
				placeholder="Type your message here..."
				placeholderTextColor="#999"
				multiline={true}
				numberOfLines={4}
				value={text}
				onChangeText={setText}
			/>
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
		height: 150,
		backgroundColor: "#fff",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 15,
		fontSize: 16,
		color: "#333",
		textAlignVertical: "top",
	},
});

export default MultilineTextInput;
