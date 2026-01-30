import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./../src/contexts/AuthContext";
import RootNavigation from "./RootNavigation";
import SplashScreen from "./index"; 

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RootNavigation />
        <SplashScreen />
      </AuthProvider>
    </QueryClientProvider>
  );
}
