import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  TextInput,
  ActivityIndicator,
  Text,
  DataTable,
  Menu,
  IconButton,
  Icon,
} from "react-native-paper";
import { useQuery } from "@tanstack/react-query";

import Header from "@/src/components/client-section/Header";
import { routes } from "@/src/constants/routes";
import useDebounce from "@/src/hooks/useDebounce";
import { fetchClientQuotes } from "@/src/services/ClientQuote";
import { useNavigate } from "@/src/hooks/useNavigate";

type TableItem = {
  id: number;
  commodity: string;
  date: string;
  reference_number: string;
  status: string;
};

const TABLE_HEADERS = ["commodity", "date requested"];

const MENU_ITEMS = [
  { iconName: "pencil", title: "edit", color: "black" },
  { iconName: "delete", title: "delete", color: "red" },
];

export default function ClientQuotesIndex() {
  const [search, setSearch] = useState<string>("");
  const [visibleMenuId, setVisibleMenuId] = useState<number | null>(null);
  const { navigate } = useNavigate();

  const debouncedSearch = useDebounce(search, 500) || "";

  // Data Fetching
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["quotes", "REQUESTED", debouncedSearch],
    queryFn: () =>
      fetchClientQuotes({ status: "REQUESTED", search: debouncedSearch }),
    placeholderData: (previousData) => previousData,
  });

  const quotes = (data as unknown as TableItem[]) || [];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title={"REQUESTED QUOTATION"} route={routes.CLIENT_DB} />

      <TextInput
        label="Search quotes..."
        value={search}
        onChangeText={setSearch}
        mode="outlined"
        style={styles.searchBar}
      />

      <DataTable style={{ flex: 1 }}>
        <DataTable.Header style={styles.header}>
          {TABLE_HEADERS.map((header) => (
            <DataTable.Title
              key={header}
              style={styles.headerTitle}
              textStyle={styles.headerText}
            >
              {header.toUpperCase()}
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {isLoading && !data ? (
          <ActivityIndicator animating={true} style={{ marginTop: 40 }} />
        ) : isError ? (
          <Text style={styles.errorText}>Error: {error?.message}</Text>
        ) : (
          quotes.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigate({
                  pathname: routes.CLIENT_QUOTATION_RECORD,
                  params: { id: item.id, title: item.commodity},
                });
              }}
            >
              <DataTable.Row>
                <DataTable.Cell textStyle={styles.cellText} style={{ flex: 2 }}>
                  {item.commodity}
                </DataTable.Cell>

                <DataTable.Cell textStyle={styles.cellText}>
                  {item.date}
                </DataTable.Cell>

                <DataTable.Cell numeric style={{ flex: 0.5 }}>
                  <Menu
                    visible={visibleMenuId === item.id}
                    onDismiss={() => setVisibleMenuId(null)}
                    anchor={
                      <IconButton
                        icon="dots-vertical"
                        size={20}
                        onPress={() => setVisibleMenuId(item.id)}
                      />
                    }
                  >
                    {MENU_ITEMS.map((menu, index) => (
                      <Menu.Item
                        key={index}
                        onPress={() => {
                          console.log(`${menu.title} clicked for ${item.id}`);
                          setVisibleMenuId(null);
                        }}
                        leadingIcon={({ size }) => (
                          <Icon
                            source={menu.iconName}
                            color={menu.color}
                            size={size}
                          />
                        )}
                        title={menu.title}
                        style={styles.menuItem}
                        titleStyle={{ color: menu.color }}
                      />
                    ))}
                  </Menu>
                </DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
          ))
        )}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
    height: 50,
  },
  header: {
    backgroundColor: "#cecece",
    height: 25,
    paddingVertical: 0,
    marginVertical: 0,
    justifyContent: "center",
  },

  headerTitle: {
    flex: 2,
    height: 25,
    alignItems: "center",
    paddingVertical: 0,
    marginVertical: 0,
  },

  headerText: {
    fontSize: 12,
    lineHeight: 14,
    color: "white",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  cellText: {
    fontWeight: "500",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  menuItem: {
    height: 35,
    justifyContent: "center",
  },
});
