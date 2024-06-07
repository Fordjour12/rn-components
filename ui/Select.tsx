import React, { useState } from "react";
import {
	FlatList,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const CustomSelect = ({ options, onSelect, selectedOption }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const handleSelect = (option) => {
		onSelect(option);
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.selectButton}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.selectButtonText}>
					{selectedOption ? selectedOption.label : "Select an option"}
				</Text>
			</TouchableOpacity>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.modalBackground}>
					<View style={styles.modalContainer}>
						<FlatList
							data={options}
							keyExtractor={(item) => item.value}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={styles.option}
									onPress={() => handleSelect(item)}
								>
									<Text style={styles.optionText}>{item.label}</Text>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
	},
	selectButton: {
		backgroundColor: "#6200ea",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		width: "80%",
	},
	selectButtonText: {
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
	},
	option: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	optionText: {
		fontSize: 16,
		color: "#333",
	},
});

const CSelect = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const options = [
		{ label: "Option 1", value: "1" },
		{ label: "Option 2", value: "2" },
		{ label: "Option 3", value: "3" },
		// Add more options as needed
	];

	return (
		<View style={appStyles.appContainer}>
			<CustomSelect
				options={options}
				onSelect={(option) => setSelectedOption(option)}
				selectedOption={selectedOption}
			/>
		</View>
	);
};

const appStyles = StyleSheet.create({
	appContainer: {
		// flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
});

export default CSelect;
