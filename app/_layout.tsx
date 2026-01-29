import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./../src/contexts/AuthContext";

import { useState } from "react";

import SplashScreen from "./index";
import RootNavigation from "./RootNavigation";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState<boolean>(true);

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
		{showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <RootNavigation />
        )}
			</AuthProvider>
		</QueryClientProvider>
	);
}
