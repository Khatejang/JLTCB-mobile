import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import styles from "../../styles/about-us/about-us-styles";
import Test from "../../components/test"

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/about_us/header.png")}
        style={styles.imageHeader}
      />
      <Text style={{fontSize: 10, textAlign: "justify", width: 325, paddingVertical: 10}}>
        Proudly recognized as the first customs brokerage in the Philippines
        certified compliant by the Professional Regulation Commission (PRC) and
        the Professional Regulatory Board for Customs Brokers (PRBCB), we uphold
        the highest standards of compliance, ethics, and professionalism in
        every transaction.
      </Text>
      <Card mode='contained'>
        <Card.Content>
          <Text>helo</Text>
        </Card.Content>
      </Card>
      <Test></Test>
    </View>
  );
}
