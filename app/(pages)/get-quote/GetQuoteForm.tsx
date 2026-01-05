import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { ContactFormData, Field, } from "../../../src/types/get-quote";
import ImageInputBox from "./ImageInputBox";

export default function GetQouteForm() {
  const fields: Field[] = [
    { label: "Full Name", key: "fullName" },
    { label: "Email", key: "email" },
    { label: "Contact Number", key: "contactNumber" },
  ];
  const [formData, setFormData] = useState<ContactFormData>({});

  return (
    <View style={styles.container}>
      {/* Personal Data */}
      {fields.map((field, i) => (
        <View key={i} style={{marginVertical:5}}>
          <Text variant="titleSmall">{field.label}</Text>
          <Surface style={{ elevation: 10, borderRadius: 10 }}>
            <TextInput
              value={formData[field.key] ?? ""}
              underlineColor="transparent" // removes underline
              activeUnderlineColor="transparent" // removes underline when focused
              mode="flat"
              style={{
                borderRadius: 10, // optional extra rounding
                height: 40,
                backgroundColor: "#fff",
              }}
              theme={{
                roundness: 10,
              }}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, [field.key]: text }))
              }
            />
          </Surface>
        </View>
      ))}
      {/* Image */}
      <Text variant="titleSmall">
        Upload File
        <Text variant="labelSmall">
          (Commercial Invoice, Packing List, Airway Bill / Bill of Lading)
        </Text>
      </Text>
      <ImageInputBox setFormData={setFormData} />
      {/* Message area */}
      <Text variant="titleSmall">Message</Text>
      <Surface style={{ elevation: 10, borderRadius: 10 }}>
        <TextInput
          value={formData.message ?? ""}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, message: text }))
          }
          multiline={true}
          underlineColor="transparent" // removes underline
          activeUnderlineColor="transparent" // removes underline when focused
          mode="flat"
          style={{
            borderRadius: 10, // optional extra rounding
            height: 100,
            backgroundColor: "#fff",
          }}
          theme={{
            roundness: 10,
          }}
        />
      </Surface>
      
      <Button
        mode="contained"
        style={{
          backgroundColor: "#161F3C", // button color
          borderRadius: 10, // round corners
          marginBottom: 30,
        }}
        
      >
        SUBMIT
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    marginHorizontal: 25,
    justifyContent: "center",
    gap: 5
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
