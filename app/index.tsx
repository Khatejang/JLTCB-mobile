import { Text, TouchableOpacity, View, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/landing-styles";

import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/whiteLogo/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/whiteLogo/word.png")}
          style={styles.wordImage}
          resizeMode="contain"
        />
        <LinearGradient
          colors={["#EE9034", "#FFFFFF"]} // BORDER gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.outerGradient}
        >
          <TouchableOpacity
            onPress={() => {
              router.push("/home");
            }}
          >
            <LinearGradient
              colors={["#161F3C", "#000000"]} // BUTTON gradient fill
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.innerGradient}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#EE9034", "#FFFFFF"]} // BORDER gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.outerGradient}
        >
          <TouchableOpacity
            onPress={() => {
              router.push("/home");
            }}
          >
            <LinearGradient
              colors={["#161F3C", "#000000"]} // BUTTON gradient fill
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.innerGradient}
            >
              <Text style={styles.buttonText}>Guest</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
}
