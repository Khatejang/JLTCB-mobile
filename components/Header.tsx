import { Image, View, TouchableOpacity } from "react-native";
import styles from "../styles/header-styles"

export default function Header(){
    return (
      <>
        <View style={styles.container}>
          <Image
            source={require("../assets/whiteLogo/fullLogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.profileContainer}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </>
    );
}