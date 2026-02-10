import { HeaderTitle } from "@react-navigation/elements";
import { useState } from "react";
import { StyleSheet } from "react-native";
import {
  DataTable,
  ActivityIndicator,
  Menu,
  IconButton,
  Icon,
} from "react-native-paper";

type TableItem = {
  id: number;
  commodity: string;
  date: string;
  reference_number: string;
  status: string;
};

type MenuAction = {
  iconName: string;
  title: string;
  color: string;
};

type Props = {
  data: TableItem[];
  tableHeader: string[];
  isLoading: boolean;
  menuItems: MenuAction[];
};

export default function Table({
  data,
  tableHeader,
  isLoading,
  menuItems,
}: Props) {
  console.log("table.tsx", data);

  const [visibleMenuId, setVisibleMenuId] = useState<number | null>(null);

  const openMenu = (id: number) => setVisibleMenuId(id);
  const closeMenu = () => setVisibleMenuId(null);
  return (
    <>
      <DataTable>

        <DataTable.Header style={styles.header}>
          {tableHeader.map((header) => (
            <DataTable.Title
              key={header}
              style={styles.headerTitle}
              textStyle={styles.headerText}
            >
              {header.toUpperCase()}
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {isLoading && <ActivityIndicator />}

        {data.map((item) => (
          <DataTable.Row key={item.id}>

            <DataTable.Cell textStyle={{ fontWeight: 500 }} style={{ flex: 2 }}>
              {item.commodity}
            </DataTable.Cell>

            <DataTable.Cell
              textStyle={{
                fontWeight: 500,
              }}
            >
              {item.date}
            </DataTable.Cell>
            
            <DataTable.Cell numeric>
              <Menu
                visible={visibleMenuId === item.id}
                onDismiss={closeMenu}
                anchor={
                  <IconButton
                    icon="dots-vertical"
                    size={20}
                    onPress={() => openMenu(item.id)}
                  />
                }
              >
                {menuItems.map((menu, index) => (
                  <Menu.Item
                    key={index}
                    onPress={() => {}}
                    leadingIcon={({ size }) => (
                      <Icon
                        source={menu.iconName}
                        color={menu.color}
                        size={size}
                      />
                    )}
                    title={menu.title}
                    style={{ height: 35, justifyContent: "center" }}
                    titleStyle={{ color: menu.color }}
                  />
                ))}
              </Menu>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>
  );
}

const styles = StyleSheet.create({
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
});
