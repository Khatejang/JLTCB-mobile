import { Text, ImageBackground, View } from "react-native";

export default function GetQoute() {
  return (
    <>
      <ImageBackground
        source={require("../../assets/banners/large.png")}
        style={{
          paddingHorizontal: 15,
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Text
          style={{
            color: "#EE9034",
            fontSize: 20,
            fontWeight: 500,
            marginBottom: 5,
          }}
        >
          Get Qoute
        </Text>
        <View
          style={{
            borderLeftWidth: 3, // thickness
            borderLeftColor: "#EE9034", // color
            padding: 10,
            height: 80,
          }}
        >
          <Text style={{ fontSize: 12, marginTop: -10, color: "white" }}>
            Whether you’re importing, exporting, or need help navigating customs
            regulations, JLTCB provides professional support for seamless
            clearance, freight forwarding, and compliance solutions. Fill out
            the form to get started we’ll send you a tailored quotation
            promptly.
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}
