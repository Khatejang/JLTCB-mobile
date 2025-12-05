import { TouchableOpacity, Image, View } from "react-native";
import styles from "../../styles/landing-page/social-icons-styles";
import * as Linking from "expo-linking";

const openLink = (url: string) => {
  Linking.openURL(url);
};

export default function SocialLogos() {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => openLink("https://www.facebook.com/jltcb.ph")}
        >
          <Image source={require("../../assets/socialLogos/facebook.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            openLink("https://www.instagram.com/jltcustomsbrokerage/</View>")
          }
        >
          <Image source={require("../../assets/socialLogos/instagram.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            openLink("https://www.youtube.com/@jilll.tolentinocustomsbrok4791")
          }
        >
          <Image source={require("../../assets/socialLogos/youtube.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            openLink("https://www.tiktok.com/@jltcustomsbrokerage")
          }
        >
          <Image source={require("../../assets/socialLogos/tiktok.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://x.com/jltcb_ph")}>
          <Image source={require("../../assets/socialLogos/twitter.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://x.com/jltcb_ph")}>
          <Image source={require("../../assets/socialLogos/linkedIn.png")} />
        </TouchableOpacity>
      </View>
    </>
  );
}
