import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

const SelectControls = () => {
	const [radioValue, setRadioValue] = useState("option1");
	const [toggleValue, setToggleValue] = useState(false);
	const [checkboxValue, setCheckboxValue] = useState(false);
	const [sliderValue, setSliderValue] = useState(50);

	return (
		<View style={styles.container}>
			{/* Radio Buttons */}
			<Text style={styles.label}>Radio Button</Text>
			<View style={styles.radioContainer}>
				<TouchableOpacity
					style={styles.radio}
					onPress={() => setRadioValue("option1")}
				>
					<FontAwesome
						name={radioValue === "option1" ? "dot-circle-o" : "circle-o"}
						size={24}
						color="#6200ea"
					/>
					<Text style={styles.radioText}>Option 1</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.radio}
					onPress={() => setRadioValue("option2")}
				>
					<FontAwesome
						name={radioValue === "option2" ? "dot-circle-o" : "circle-o"}
						size={24}
						color="#6200ea"
					/>
					<Text style={styles.radioText}>Option 2</Text>
				</TouchableOpacity>
			</View>

			{/* Toggle Button */}
			<Text style={styles.label}>Toggle Button</Text>
			<Switch
				trackColor={{ false: "#767577", true: "#81b0ff" }}
				thumbColor={toggleValue ? "#6200ea" : "#f4f3f4"}
				onValueChange={(value) => setToggleValue(value)}
				value={toggleValue}
			/>

			{/* Checkbox */}
			<Text style={styles.label}>Checkbox</Text>
			{/* <CheckBox
				value={checkboxValue}
				onValueChange={setCheckboxValue}
				tintColors={{ true: "#6200ea", false: "#767577" }}
			/> */}

			{/* Range Slider */}
			<Text style={styles.label}>Range Slider</Text>
			{/* <Slider
				style={styles.slider}
				minimumValue={0}
				maximumValue={100}
				minimumTrackTintColor="#6200ea"
				maximumTrackTintColor="#d3d3d3"
				thumbTintColor="#6200ea"
				value={sliderValue}
				onValueChange={(value) => setSliderValue(value)}
			/>
			<Text style={styles.sliderValue}>{sliderValue.toFixed(0)}</Text> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
		backgroundColor: "#f5f5f5",
	},
	label: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	radioContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	radio: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 20,
	},
	radioText: {
		fontSize: 16,
		marginLeft: 10,
	},
	slider: {
		width: "100%",
		height: 40,
	},
	sliderValue: {
		textAlign: "center",
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 10,
	},
});

export default SelectControls;
