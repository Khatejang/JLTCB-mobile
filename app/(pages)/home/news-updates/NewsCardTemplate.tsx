import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

export default function NewsCardTemplate() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const formatted = `${day}/${month}/${year}`;
  return (
    <Card style={styles.cardContainer} mode="contained">
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {/* LEFT IMAGE */}
        <Image
          source={require("../../../../src/assets/images/testImage.png")}
          style={{
            width: 90,
            height: 90,
            borderRadius: 8,
            marginRight: 10,
          }}
        />

        {/* RIGHT TEXT CONTENT */}
        <View style={{ flex: 1, gap: 5 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 1,
            }}
          >
            <Text style={styles.title_1}>{formatted}</Text>

            <Text style={styles.title_1}>JANELLE</Text>
          </View>

          <Text style={styles.title_2}>
            What Is the Prior Disclosure Program and How It Can Save Your
            Business from Customs Penalties
          </Text>
          <Text numberOfLines={3} style={styles.description}>
            What Is the Prior Disclosure Program and How It Can Save Your
            Business from Customs Penalties Previously on...
          </Text>
        </View>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({

  cardContainer: {
    marginTop: 5,
    height: 90,
    justifyContent: "center",
    elevation: 0,
    borderWidth: 0,
    backgroundColor: "#ffffff",
  },
  title_1: {
    backgroundColor: "gray",
    fontSize: 9,
    paddingHorizontal: 5,
    color: "white",
  },
  title_2: { fontSize: 9, fontWeight: 700 },
  description: { fontSize: 8 },
});
