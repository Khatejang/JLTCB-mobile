import {
  MartelSans_800ExtraBold,
  MartelSans_900Black,
  useFonts,
} from "@expo-google-fonts/martel-sans";
import { Image, ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function LandingPage() {
  const { navigate } = useRouter();

  const [loaded, error] = useFonts({
    MartelSans_900Black,
    MartelSans_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@/src/assets/black_logos/logo.png")}
            contentFit="contain"
          />
          <Text style={styles.title}>Jill L. Tolentino Group</Text>
        </View>

        <View style={styles.solutions}>
          <Pressable
            onPress={() => navigate("/customs-brokerage")}
            style={styles.solution}
          >
            <Image
              style={styles.image}
              source={require("@/src/assets/landing-page/customs-brokerage.png")}
              contentFit="contain"
            />
            <Text style={styles.solutionText}>CUSTOMS BROKERAGE</Text>
          </Pressable>
          <View style={styles.solution}>
            <Image
              style={styles.image}
              source={require("@/src/assets/landing-page/global-trade.png")}
              contentFit="contain"
            />
            <Text style={styles.solutionText}>
              GLOBAL TRADE AND BUSINESS SOLUTIONS CORPORATIONS
            </Text>
          </View>
          <View style={styles.solution}>
            <Image
              style={styles.image}
              source={require("@/src/assets/landing-page/world-wide-logistics.png")}
              contentFit="contain"
            />
            <Text style={styles.solutionText}>
              WORLD WIDE LOGISTICS CORPORATION
            </Text>
          </View>
        </View>
      </View>

      <ImageBackground
        style={styles.bottomBanner}
        source={require("@/src/assets/banners/small.png")}
        contentFit="cover"
        contentPosition="right"
      >
        <Image
          style={styles.skyline}
          source={require("@/src/assets/landing-page/skyline_vector_white 1.png")}
          contentFit="cover"
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  main: {
    justifyContent: "center",
    flex: 1,
    gap: 30,
    paddingHorizontal: 20,
  },
  logoContainer: {
    gap: 20,
  },
  logo: {
    height: 300,
    marginLeft: "8%",
  },
  image: {
    height: 100,
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "MartelSans_900Black",
    textAlign: "center",
    fontSize: 40,
    lineHeight: 56,
  },
  solutions: {
    flexDirection: "row",
    gap: 10,
  },
  solution: {
    flex: 1,
  },
  solutionText: {
    color: "#16324A",
    fontFamily: "MartelSans_800ExtraBold",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 20,
    fontSize: 12,
  },
  bottomBanner: {
    aspectRatio: 3.5,
    transform: [{ rotate: "180deg" }],
  },
  skyline: {
    flex: 1,
    width: "100%",
    transform: [{ rotate: "180deg" }, { translateY: 20 }],
  },
});
