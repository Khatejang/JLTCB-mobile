import { AuthProvider } from "./../src/contexts/AuthContext";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import RootNavigation from "./RootNavigation";
import SplashScreen from "./index";

const queryClient = new QueryClient();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    onSurface: '#000000',
  },
};

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AutocompleteDropdownContextProvider>
          <PaperProvider theme={theme}>
            <RootNavigation />
            <SplashScreen />
          </PaperProvider>
        </AutocompleteDropdownContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
