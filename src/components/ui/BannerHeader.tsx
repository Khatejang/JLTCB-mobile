import Ionicons from "@expo/vector-icons/Ionicons";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { BANNERS } from "@/src/constants/banners";

interface BannerHeaderProps {
	back?: boolean;
	title: string;
	variant: "light" | "dark";
}

export default function BannerHeader({
	back = true,
	title,
	variant,
}: BannerHeaderProps) {
	const router = useRouter();

	return (
		<ImageBackground
			source={BANNERS[variant]}
			contentPosition="bottom"
			style={[styles.container]}
		>
			<View style={styles.content}>
				{back && (
					<TouchableOpacity onPress={() => router.back()}>
						<Ionicons name="arrow-back" size={24} style={styles.textColor} />
					</TouchableOpacity>
				)}
				<Text variant="titleLarge" style={[styles.title, styles.textColor]}>
					{title}
				</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		minHeight: 120,
	},
	content: {
		flexDirection: "row",
		padding: 5,
		gap: 10,
		alignItems: "center",
	},
	textColor: {
		color: "#1C213B",
	},
	title: {
		flex: 1,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});
