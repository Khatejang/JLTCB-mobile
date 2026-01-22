import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigate } from "@/src/hooks/useNavigate";

const NavIcons = [
  {
    iconName: "grid-outline",
    route: "(employee-account-specialist)/dashboard",
  },
  {
    iconName: "chatbox-ellipses-outline",
    route: "(employee-account-specialist)/chatbox",
  },
];

export default function LeadASNavBar() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const {navigate} = useNavigate();

  return (
    <View style={styles.navContainer}>
      {NavIcons.map((icon, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => (
              setActiveIndex(index),
              navigate(icon.route as any)
            )}
          >
            <Ionicons
              name={icon.iconName as any}
              size={28}
              color={index === activeIndex ? "#EE9034" : "#000000"}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffffff",
    height: 60,
    paddingHorizontal: 50,
  },
});
