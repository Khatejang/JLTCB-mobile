import { Stack, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

export default function RootLayout() {
  const pathname = usePathname();

  const hideHeader = pathname === "/";
  const hideNavigationBar = pathname === "/";
  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "#b1b1b3ff" }}
      >
        {!hideHeader && <Header />}
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        {!hideNavigationBar && <NavigationBar />}
      </SafeAreaView>
    </>
  );
}
