import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomAlert = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const showAlert = () => {
		setModalVisible(true);
	};

	const hideAlert = () => {
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={showAlert}>
				<Text style={styles.buttonText}>Show Custom Alert</Text>
			</TouchableOpacity>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={hideAlert}
			>
				<View style={styles.modalBackground}>
					<View style={styles.modalContainer}>
						<Text style={styles.modalTitle}>Alert Title</Text>
						<Text style={styles.modalMessage}>
							This is the custom alert message.
						</Text>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.modalButton} onPress={hideAlert}>
								<Text style={styles.modalButtonText}>Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.modalButton} onPress={hideAlert}>
								<Text style={styles.modalButtonText}>OK</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
	button: {
		backgroundColor: "#6200ea",
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 10,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	modalBackground: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContainer: {
		width: "80%",
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 20,
		alignItems: "center",
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	modalMessage: {
		fontSize: 16,
		color: "#333",
		textAlign: "center",
		marginBottom: 20,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
	modalButton: {
		flex: 1,
		paddingVertical: 10,
		marginHorizontal: 5,
		backgroundColor: "#6200ea",
		borderRadius: 5,
		alignItems: "center",
	},
	modalButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default CustomAlert;
