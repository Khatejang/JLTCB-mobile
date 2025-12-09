import { Image, Text, View } from "react-native";
import styles from "../../styles/home/news-updates-styles";

export default function GovermentLogos() {
  const logos = [
    require("../../assets/government/birLogo.png"),
    require("../../assets/government/bocLogo.png"),
    require("../../assets/government/dofLogo.png"),
    require("../../assets/government/dtiLogo.png"),
    require("../../assets/government/pccbiLogo.png"),
    require("../../assets/government/pezaLogo.png"),
    require("../../assets/government/ppaLogo.jpg"),
    require("../../assets/government/prcLogo.png"),
  ];
  return (
    <View style={styles.logosContainer}>
      {logos.map((logo, index) => (
        <View key={index}>
          <Image source={logo} style={styles.logoSize} />
        </View>
      ))}
    </View>
  );
}
