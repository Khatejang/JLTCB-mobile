import { useState, Dispatch, SetStateAction } from "react";
import { FlatList, View } from "react-native";
import { Text, List, Checkbox } from "react-native-paper";

import {
  QuoteForm,
  serviceType,
  transpoMode,
  options,
} from "../../../../types/client";

type Props = {
  formData: QuoteForm;
  setFormData: Dispatch<SetStateAction<QuoteForm>>;
};

export default function Service({ formData, setFormData }: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <Text allowFontScaling={false} style={{ fontSize: 11 }}>
        Service Type
        <Text style={{ color: "red" }}>*</Text>
      </Text>
      <List.Section style={{ backgroundColor: "#dadada" }}>
        <List.Accordion
          title={formData?.service?.type ?? ""}
          expanded={expanded}
          onPress={handlePress}
          style={{
            height: 40,
            justifyContent: "center",
            paddingVertical: 0,
            borderRadius: 10,
          }}
          titleStyle={{ fontSize: 15 }}
          theme={{ colors: { primary: "#161F3C" } }}
        >
          {serviceType.map((type) => (
            <List.Item
              key={type}
              title={type}
              onPress={() => {
                setExpanded(false);
                setFormData((prev) => ({
                  ...prev,
                  service: { ...prev.service, type: type, transport_mode: "" },
                }));
                setSelectedMode(null);
              }}
              contentStyle={{ height: 50 }}
              titleStyle={{ fontSize: 12 }}
              style={{
                paddingVertical: 0,
                height: 30,
                margin: 0,
                justifyContent: "center",
              }}
            />
          ))}
        </List.Accordion>
      </List.Section>
      <View style={{ paddingHorizontal: 20 }}>
        {formData.service?.type === "IMPORT" && (
          <FlatList
            data={transpoMode}
            horizontal
            scrollEnabled={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
            }}
            renderItem={({ item }) => (
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Checkbox.Android
                  key={item}
                  status={selectedMode === item ? "checked" : "unchecked"}
                  onPress={() => {
                    setSelectedMode(item);

                    setFormData((prev) => ({
                      ...prev,
                      service: { ...prev.service, transport_mode: item },
                    }));
                  }}
                />
                <Text>{item}</Text>
              </View>
            )}
          />
        )}
        {formData.service?.type === "EXPORT" && <Text>UNDER CONSTRUCTION</Text>}
        {formData.service?.type === "BUSINESS SOLUTION" && (
          <Text>UNDER CONSTRUCTION</Text>
        )}

        {selectedMode === "SEA" && (
          <>
            {/* SELECT ALL SECTION */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
                paddingBottom: 5,
              }}
            >
              <Checkbox.Android
                status={
                  (formData?.service?.options?.length ?? 0) === options.length
                    ? "checked"
                    : (formData?.service?.options?.length ?? 0)> 0
                      ? "indeterminate"
                      : "unchecked"
                }
                onPress={() => {
                  const allSelected =
                    (formData?.service?.options?.length ?? 0) === options.length;
                  setFormData((prev) => ({
                    ...prev,
                    service: {
                      ...prev.service,
                      
                      options: allSelected ? [] : [...options],
                    },
                  }));
                }}
              />
              <Text style={{ fontWeight: "bold" }}>ALL IN</Text>
            </View>
            <FlatList
              data={options}
              scrollEnabled={false}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "space-between",
              }}
              renderItem={({ item }) => {
                
                const isChecked = formData.service?.options?.includes(item);

                return (
                  <View
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                      marginVertical: 2,
                    }}
                  >
                    <Checkbox.Android
                      status={isChecked ? "checked" : "unchecked"}
                      onPress={() => {
                        setFormData((prev) => {
                          const currentOptions = prev.service?.options || [];
                          const updatedOptions = currentOptions.includes(item)
                            ? currentOptions.filter((opt) => opt !== item)
                            : [...currentOptions, item];

                          return {
                            ...prev,
                            service: {
                              ...prev.service,
                              options: updatedOptions,
                            },
                          };
                        });
                      }}
                    />
                    <Text style={{ fontSize: 13 }}>{item}</Text>
                  </View>
                );
              }}
            />
          </>
        )}
        {selectedMode === "AIR" && <Text>UNDER CONSTRUCTION</Text>}
      </View>
    </View>
  );
}
