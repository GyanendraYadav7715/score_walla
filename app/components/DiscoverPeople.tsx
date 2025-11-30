import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const suggestions = [
  { id: "1", name: "Piyush", img: "https://i.pravatar.cc/150?img=5" },
  { id: "2", name: "Gaurav", img: "https://i.pravatar.cc/150?img=7" },
  { id: "3", name: "Amit", img: "https://i.pravatar.cc/150?img=9" },
];

const DiscoverPeople = () => {
  return (
    <View className="mt-3">
      <Text className="font-bold text-lg ml-4 mb-2">Discover people</Text>

      <FlatList
        data={suggestions}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="w-36 p-3 bg-gray-100 rounded-xl mr-3">
            <TouchableOpacity className="absolute top-2 right-2">
              <Ionicons name="close" size={18} />
            </TouchableOpacity>

            <Image
              source={{ uri: item.img }}
              className="w-20 h-20 rounded-full self-center"
            />

            <Text className="text-center font-semibold mt-2">{item.name}</Text>

            <TouchableOpacity className="mt-3 bg-blue-600 py-2 rounded-md">
              <Text className="text-center text-white font-bold">Follow</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default DiscoverPeople;
