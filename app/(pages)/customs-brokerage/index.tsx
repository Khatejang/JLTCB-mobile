import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("@/src/assets/landingPage.png")}
      style={styles.image}
    >
      <SocialLogos />

      <View style={styles.whiteOverlay} />

      <View style={styles.buttonContainer}>
        <Image
          source={require("@/src/assets/black_logos/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Image
          source={require("@/src/assets/black_logos/word.png")}
          style={styles.wordImage}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/home")}>
          <LinearGradient
            colors={["#161F3C", "#000000"]} // BUTTON gradient fill
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.innerGradient}
          >
            <Ionicons name="person" size={22} color="#EE9034" />
            <Text style={styles.buttonText}>Guest</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text variant="titleMedium">
          Already have an account?{" "}
          <Link href="/sign-in" style={{ fontWeight: "bold" }}>
            Sign In
          </Link>
        </Text>
      </View>
    </ImageBackground>
  );
}

const openLink = (url: string) => {
  Linking.openURL(url);
};

function SocialLogos() {
  return (
    <View style={styles.socialIconsContainer}>
      <TouchableOpacity
        onPress={() => openLink("https://www.facebook.com/jltcb.ph")}
      >
        <Image source={require("@/src/assets/social_logos/facebook.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink("https://www.instagram.com/jltcustomsbrokerage/</View>")
        }
      >
        <Image source={require("@/src/assets/social_logos/instagram.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink("https://www.youtube.com/@jilll.tolentinocustomsbrok4791")
        }
      >
        <Image source={require("@/src/assets/social_logos/youtube.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openLink("https://www.tiktok.com/@jltcustomsbrokerage")}
      >
        <Image source={require("@/src/assets/social_logos/tiktok.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink("https://x.com/jltcb_ph")}>
        <Image source={require("@/src/assets/social_logos/twitter.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink("https://x.com/jltcb_ph")}>
        <Image source={require("@/src/assets/social_logos/linkedIn.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  //LANDING PAGE

  //logo image
  logoContainer: {
    flex: 1,
    alignItems: "center",
    gap: 5,
  },
  outerGradient: {
    padding: 3,
    borderRadius: 50,
  },
  innerGradient: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    width: 350,
  },
  logoImage: {
    width: 500,
    height: 250,
  },
  wordImage: {
    width: 250,
    height: 50,
    margin: 0,
    padding: 0,
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
  },
  whiteOverlay: {
    ...StyleSheet.absoluteFillObject, // fill entire ImageBackground
    backgroundColor: "rgba(255, 255, 255, 0.64)",
  },

  //button
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonText: {
    color: "#EE9034",
    fontSize: 16,
    fontWeight: "bold",
  },
  icons: {
    height: 50,
    width: 50,
  },

  //social icons style
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 80,
    marginTop: 20,
  },
});
