import { Text, ImageBackground, View } from "react-native";

export default function GetAppointment() {
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
          BOOK YOUR APPOINTMENT NOW
        </Text>
        <View
          style={{
            borderLeftWidth: 2, // thickness
            borderLeftColor: "#EE9034", // color
            padding: 10,
            height: 65,
          }}
        >
          <Text style={{ fontSize: 12, marginTop: -10, color: "white" }}>
            At Jill L. Tolentino Customs Brokerage, we simplify imports and
            exports for businesses nationwide. From paperwork to clearance, we
            ensure your goods move smoothly and efficiently through customs.
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}
