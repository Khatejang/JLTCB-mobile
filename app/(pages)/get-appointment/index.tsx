import { Text, ImageBackground, View } from "react-native";

export default function GetAppointment() {
  return (
    <>
      <ImageBackground
        source={require("../../../src/assets/banners/large.png")}
       style={{
          padding:20,
          aspectRatio: 2,
        }}
          resizeMode= "cover"
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
           borderLeftWidth: 4, // thickness
            borderLeftColor: "#EE9034", // color
            margin: 5,
            paddingHorizontal: 5,
            height: 55,
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 12,  color: "white" }}>
            At Jill L. Tolentino Customs Brokerage, we simplify imports and
            exports for businesses nationwide. From paperwork to clearance, we
            ensure your goods move smoothly and efficiently through customs.
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}
