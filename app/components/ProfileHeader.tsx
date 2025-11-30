import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const ProfileHeader = ({ openModal, toggleDiscover }: any) => {
  return (
    <View className="px-4 pt-6 pb-3">
      {/* Header Row */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={openModal}>
          <Ionicons name="add" size={24} />
        </TouchableOpacity>

        <View className="flex-row items-center gap-2">
          <Text className="text-2xl font-medium">codeaura108</Text>
          <SimpleLineIcons name="arrow-down" size={14} />
        </View>

        <Ionicons name="menu" size={24} />
      </View>

      {/* Profile Info */}
      <View className="flex-row items-center">
        <View className="w-24 h-24 rounded-full border-4 border-pink-500 items-center justify-center">
          <Image
            source={{ uri: "https://i.pravatar.cc/300?img=12" }}
            className="w-20 h-20 rounded-full"
          />
        </View>

        <View className="ml-6">
          <Text className="font-semibold mb-2">Gyanendra Yadav</Text>

          <View className="flex-row gap-5">
            {[
              { label: "posts", value: 0 },
              { label: "followers", value: 3 },
              { label: "following", value: 9 },
              { label: "matches", value: 9 },
            ].map((item) => (
              <View key={item.label} className="items-center">
                <Text className="text-lg font-bold">{item.value}</Text>
                <Text className="text-gray-600">{item.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Bio */}
      <View className="mt-3">
        <Text className="text-gray-700">All rounder programmer</Text>
        <Text className="text-gray-700">goodbye</Text>
      </View>

      {/* Buttons */}
      <View className="flex-row mt-4 gap-2">
        <TouchableOpacity
          onPress={() => router.push("/(profile)/edit")}
          className="flex-1 bg-gray-200 py-2 rounded-lg items-center"
        >
          <Text className="font-semibold">Edit profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(profile)/share")}
          className="flex-1 bg-gray-200 py-2 rounded-lg items-center"
        >
          <Text className="font-semibold">Share profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-200 py-2 px-3 rounded-lg"
          onPress={toggleDiscover}
        >
          <Ionicons name="person-add-outline" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
