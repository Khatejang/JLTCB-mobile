import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigate } from "@/src/hooks/useNavigate";

const NavIcons = [
  { iconName: "grid-outline", route: "(client)/dashboard" },
  { iconName: "newspaper-outline", route: "../home" },
  { iconName: "ticket-outline", route: "(client)/get-quote-request-form" },
  { iconName: "chatbox-ellipses-outline", route: "(client)/chatbox" },
];

export default function ClientNavBar() {
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
    justifyContent: "space-evenly",
    backgroundColor: "#ffffffff",
    height: 60,
  },
});
