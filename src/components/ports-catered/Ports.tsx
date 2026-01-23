import ports from "@/src/constants/ports-catered";
import type { Region } from "@/src/types/ports";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function Ports() {
	const [activeRegion, setActiveRegion] = useState<Region>("Luzon");
	const [expandedPorts, setExpandedPorts] = useState<string[]>([]);
	const regionPorts = ports.find((port) => port.region === activeRegion)?.ports;

	function handleExpandCardPort(portName: string) {
		if (expandedPorts.includes(portName)) {
			setExpandedPorts((prevExpandedPorts) => {
				const nextExpandedPorts = prevExpandedPorts.filter(
					(port) => port !== portName,
				);
				return nextExpandedPorts;
			});
			return;
		}
		setExpandedPorts((e) => [...e, portName]);
	}

	const isExpanded = (portName: string) => expandedPorts.includes(portName);

	return (
		<View style={{ marginHorizontal: 10, gap: 10 }}>
			{/* Region Selector Buttons */}
			<FlatList
				data={ports}
				horizontal
				keyExtractor={(item) => item.region}
				scrollEnabled={false}
				renderItem={({ item }) => {
					const isActive = activeRegion === item.region;
					return (
						<Button
							mode="outlined"
							style={{
								borderColor: isActive ? "#EE9034" : "#888888ff",
								backgroundColor: isActive ? "#EE9034" : "#ffffff",
								borderRadius: 2,
								marginRight: 10,
							}}
							labelStyle={{
								color: isActive ? "#ffffff" : "#888888ff",
							}}
							onPress={() => setActiveRegion(item.region as Region)}
						>
							<Text allowFontScaling={false} style={{ fontSize: 10 }}>
								{item.region}
							</Text>
						</Button>
					);
				}}
			/>

			{/* Ports List for Active Region */}
			<FlatList
				style={{ paddingBlockEnd: 12 }}
				data={regionPorts}
				keyExtractor={(port) => port.port}
				renderItem={({ item: portItem }) => (
					<Card
						onPress={() => handleExpandCardPort(portItem.port)}
						style={{ marginVertical: 4 }}
					>
						<Card.Content style={{ paddingVertical: 8, paddingHorizontal: 12 }}>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									gap: 10,
								}}
							>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										gap: 5,
									}}
								>
									<Ionicons name="boat" size={18} />
									<Text allowFontScaling={false}>{portItem.port}</Text>
								</View>
								<Button
									compact
									contentStyle={{
										paddingHorizontal: 0,
										paddingVertical: 0,
									}}
								>
									{isExpanded(portItem.port) ? (
										<Ionicons
											name="arrow-up-circle"
											size={22}
											color="#EE9034"
										/>
									) : (
										<Ionicons
											name="arrow-down-circle"
											size={22}
											color="#EE9034"
										/>
									)}
								</Button>
							</View>
							{isExpanded(portItem.port) && (
								<View
									style={{
										paddingBlock: 8,
									}}
								>
									{portItem.subPorts.length > 0 ? (
										<FlatList
											data={portItem.subPorts}
											renderItem={({ item }) => (
												<Text key={item} allowFontScaling={false}>
													• {item}
												</Text>
											)}
										/>
									) : (
										<Text allowFontScaling={false}>No Sub-Ports!</Text>
									)}
								</View>
							)}
						</Card.Content>
					</Card>
				)}
			/>
		</View>
	);
}
