import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAlert from "./ui/AlertModal";
import ButtonExamples from "./ui/Button";
import MultilineTextInput from "./ui/MultiLineTextInput";
import SelectControls from "./ui/SelectControls";
import { BeautifulTextInput, InputWithLabel } from "./ui/TextInput";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View>
					<Text>Single Line TextInput</Text>
					<BeautifulTextInput />
					<InputWithLabel />
				</View>

				<View style={{ marginVertical: 8 }} />

				<View>
					<Text>Multiline TextInput</Text>
					<MultilineTextInput />
				</View>
				<View style={{ marginVertical: 8 }} />
				<View>
					<Text>Button Examples</Text>
					<ButtonExamples />
				</View>
				<View style={{ marginVertical: 8 }} />
				<View>
					<Text>Select Controls</Text>
					<SelectControls />
				</View>
				<View style={{ marginVertical: 8 }} />
				<CustomAlert />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
