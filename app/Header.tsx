import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View } from "react-native";
import styles from "./header-styles";
import { useNavigate } from "@/src/hooks/useNavigate";
import { routes } from "@/src/constants/routes";

export default function Header() {
  const {navigate} = useNavigate()

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../src/assets/white_logos/fullLogo.png")}
          style={styles.logo}
          contentFit="contain"
        />
        <TouchableOpacity style={styles.profileContainer} onPress={() => navigate(routes.SIGN_IN)}>
          <Image
            source={require("../src/assets/images/profile.png")}
            style={styles.profileImage}
            contentFit="contain"
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#EE9034", "#161F3C"]}
        style={styles.borderBottom}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </>
  );
}
