import { useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const ITEM_SIZE = width / 3 - 2;

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("posts");

  const TABS = [
    { id: "posts", icon: "grid-outline" },
    { id: "reels", icon: "play-outline" },
    { id: "matches", icon: "trophy-outline" },
    { id: "repost", icon: "repeat" },
    { id: "tagged", icon: "pricetag-outline" },
    { id: "stats", icon: "analytics-outline" },
  ];

  const DATA: any = {
    posts: [
      { id: 1, img: "https://picsum.photos/300?1" },
      { id: 2, img: "https://picsum.photos/300?2" },
      { id: 3, img: "https://picsum.photos/300?3" },
      { id: 4, img: "https://picsum.photos/300?4" },
    ],
    reels: [
      { id: 5, img: "https://picsum.photos/300?5" },
      { id: 6, img: "https://picsum.photos/300?6" },
    ],
    matches: [
      { id: 7, img: "https://picsum.photos/300?7" },
      { id: 8, img: "https://picsum.photos/300?8" },
    ],
    repost: [],
    tagged: [
      { id: 9, img: "https://picsum.photos/300?9" },
      { id: 10, img: "https://picsum.photos/300?10" },
    ],
    stats: [{ id: 11, img: "https://picsum.photos/300?11" }],
  };

  return (
    <FlatList
      data={DATA[activeTab]}
      scrollEnabled={false} // ✅ FIX
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.img }}
          style={{
            width: ITEM_SIZE,
            height: ITEM_SIZE,
            margin: 1,
          }}
        />
      )}
      ListHeaderComponent={
        <View className="mt-3">
          {/* ------- TOP TAB BAR ------- */}
          <View className="flex-row justify-around border-t border-gray-300 py-2">
            {TABS.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                onPress={() => setActiveTab(tab.id)}
                className={`py-2 px-3 ${
                  activeTab === tab.id ? "border-b-2 border-black" : ""
                }`}
              >
                <Ionicons
                  name={tab.icon as any}
                  size={22}
                  color={activeTab === tab.id ? "#000" : "#999"}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      }
    />
  );
}
