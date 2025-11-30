import { Stack } from "expo-router";
import "./globals.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" options={{ headerShown: false }} />
      <Stack.Screen name="ShareProfile" options={{ headerShown: false }} />
    </Stack>
  );
}
