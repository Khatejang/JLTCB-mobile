import 'react-native-reanimated'
import { Stack, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import GuestNavBar from "./GuestNavBar";

export default function RootLayout() {
  const pathname = usePathname();

  const hideHeader = pathname === "/" || pathname === "/landing-page";
  const hideNavigationBar = pathname === "/" || pathname === "/landing-page";
  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{
          flex: 1,
          backgroundColor: "#b1b1b3ff",
         
        }}
      >
        {!hideHeader && <Header />}
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade"
          }}
        />
        {!hideNavigationBar && <GuestNavBar />}
      </SafeAreaView>
    </>
  );
}
