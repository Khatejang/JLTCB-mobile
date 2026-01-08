import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function Form() {
  const [formData, setFormData] = useState<Object>({});

  return (
    <View style={styles.container}>
      <Text variant="titleSmall">Meeting Location</Text>
      <TextInput
        underlineColor="transparent" // removes underline
        activeUnderlineColor="transparent" // removes underline when focused
        mode="flat"
        style={{
          borderRadius: 10,
          height: 40,
          backgroundColor: "#fff",
        }}
        theme={{
          roundness: 10,
        }}
        onChangeText={(text) =>
          seetFor
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: "center",
    gap: 1,
  },
  texArea: {
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    height: 120,
  },
  label: {
    marginTop: 5,
    fontWeight: "400",
    fontSize: 14,
  },
});
