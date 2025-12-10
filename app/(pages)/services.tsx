import { Text, ImageBackground } from "react-native";

export default function Services() {
  return (
    <>
      <ImageBackground
        source={require("../../assets/banners/small.png")}
        style={{ paddingHorizontal: 40, paddingVertical: 20 }}
      >
        <Text style={{ color: "#EE9034", fontSize: 20, fontWeight: 500 }}>
          SERVICES
        </Text>
      </ImageBackground>
    </>
  );
}
