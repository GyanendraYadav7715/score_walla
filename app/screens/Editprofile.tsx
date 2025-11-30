import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("Gyanendra Yadav");
  const [username, setUsername] = useState("codeaura108");
  const [bio, setBio] = useState("I am the all rounder programmer. goodbye");

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-6">
      {/* TOP BAR */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text className="ml-4 text-lg font-bold">Edit profile</Text>
      </View>

      {/* PROFILE IMAGE */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: "https://i.pravatar.cc/300?img=12" }}
          className="w-24 h-24 rounded-full"
        />

        <Text className="mt-2 text-blue-600 font-semibold">
          Change profile picture
        </Text>
      </View>

      {/* INPUTS */}
      <View className="border border-gray-300 rounded-xl px-4 py-3 mb-4">
        <Text className="text-gray-500 mb-1">Name</Text>
        <TextInput value={name} onChangeText={setName} className="text-black" />
      </View>

      <View className="border border-gray-300 rounded-xl px-4 py-3 mb-4">
        <Text className="text-gray-500 mb-1">Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          className="text-black"
        />
      </View>

      <View className="border border-gray-300 rounded-xl px-4 py-3 mb-4">
        <Text className="text-gray-500 mb-1">Pronouns</Text>
        <TextInput placeholder="Pronouns" />
      </View>

      <View className="border border-gray-300 rounded-xl px-4 py-3 mb-3">
        <Text className="text-gray-500 mb-1">Bio</Text>
        <TextInput value={bio} onChangeText={setBio} multiline />
      </View>

      {/* OTHER OPTIONS */}
      <TouchableOpacity className="py-3">
        <Text className="text-base">Add link</Text>
      </TouchableOpacity>

      <TouchableOpacity className="py-3">
        <Text className="text-base">Add banners</Text>
      </TouchableOpacity>

      {/* GENDER */}
      <View className="border border-gray-300 rounded-xl px-4 py-3 mt-3 flex-row justify-between items-center">
        <Text>Gender</Text>
        <Text className="text-gray-600">Male</Text>
      </View>

      {/* MUSIC */}
      <TouchableOpacity className="flex-row justify-between py-4 border-b border-gray-200 mt-3">
        <Text className="text-base">Music</Text>
        <Text className="text-gray-400">Add music to your profile</Text>
      </TouchableOpacity>

      {/* PREVIEW */}
      <TouchableOpacity className="flex-row justify-between py-4 border-b border-gray-200">
        <Text className="text-base">Preview</Text>
        <Text className="text-gray-400">Add content</Text>
      </TouchableOpacity>

      {/* LINKS */}
      <Text className="text-blue-600 mt-6">Switch to professional account</Text>

      <Text className="text-blue-600 mt-4 mb-10">
        Personal information settings
      </Text>
    </ScrollView>
  );
};

export default EditProfile;
