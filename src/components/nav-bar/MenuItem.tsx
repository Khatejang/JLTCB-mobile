import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

export default function MenuItem({
  onPress,
  label,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ fontSize: 20, color: "#6D6D6D" }}> {label} </Text>
    </TouchableOpacity>
  );
}
