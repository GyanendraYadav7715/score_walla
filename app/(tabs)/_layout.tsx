import { Tabs } from "expo-router";
import { Ionicons,} from "@expo/vector-icons";
import { Image } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0.5,
          borderTopColor: "#ddd",
          backgroundColor: "#fff",
        },
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={focused ? "#000" : "#777"}
            />
          ),
        }}
      />

      {/* Reels / Videos */}
      <Tabs.Screen
        name="reels"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={26}
              color={focused ? "#000" : "#777"}
            />
          ),
        }}
      />

      {/* Create Post (Center button) */}
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "chatbox" : "chatbox-outline"}
              size={30}
              color="#000"
            />
          ),
        }}
      />

      {/* Activity */}
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={26}
              color={focused ? "#000" : "#777"}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                borderWidth: focused ? 2 : 0,
                borderColor: "#000",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
