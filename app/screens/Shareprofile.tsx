import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ShareProfile() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white items-center justify-center relative">
      {/* Close button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-6"
      >
        <Ionicons name="close" size={28} />
      </TouchableOpacity>

      {/* Emoji background */}
      <View className="absolute inset-0 flex-wrap flex-row justify-center items-center opacity-20">
        {Array(30)
          .fill("😀")
          .map((item, index) => (
            <Text key={index} className="text-4xl m-3">
              😄
            </Text>
          ))}
      </View>

      {/* QR Card */}
      <View className="bg-white w-[85%] py-6 px-4 rounded-3xl items-center shadow-lg">
        {/* Fake QR (replace later with real QR) */}
        <View className="w-52 h-52 border-2 border-yellow-600 rounded-2xl items-center justify-center">
          <Ionicons name="logo-instagram" size={50} color="#C47D0A" />
          <Text className="mt-4 text-yellow-600 font-bold">@codeaura108</Text>
        </View>

        {/* Buttons */}
        <View className="flex-row mt-6 space-x-8">
          <TouchableOpacity className="items-center">
            <Ionicons name="share-social-outline" size={24} />
            <Text className="mt-1 text-xs">Share</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <Ionicons name="link-outline" size={24} />
            <Text className="mt-1 text-xs">Copy</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <Ionicons name="download-outline" size={24} />
            <Text className="mt-1 text-xs">Download</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
