import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ProfileTabs from "../components/ProfileTabs";

import Modal from "react-native-modal";
import React, { useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const goToEdit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/screens/Editprofile");
    }, 1200); // 1.2 sec loader
  };
  const [load, setLoad] = useState(false);

  const openShare = () => {
    setLoad(true);

    setTimeout(() => {
      setLoad(false);
      router.push("/screens/Shareprofile");
    }, 1200);
  };
  const [visible, setVisible] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const suggestions = [
    {
      id: 22,
      name: "Piyush Nimje",
      img: "https://i.pravatar.cc/150?img=5",
      subtitle: "Suggested for you",
    },
    {
      id: 3,
      name: "Gaurav",
      img: "https://i.pravatar.cc/150?img=7",
      subtitle: "Suggested for you",
    },
    {
      id: 4,
      name: "Amit Tech",
      img: "https://i.pravatar.cc/150?img=9",
      subtitle: "Followed by xyz",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white mt-7">
      {/* ---------- TOP HEADER ---------- */}
      <View className="px-4 pt-6 pb-3">
        <View className="flex-row justify-between items-center mb-4">
          {/* + ICON */}
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text className="text-3xl font-bold">
              <Ionicons name="add" color="#000" size={24} />
            </Text>
          </TouchableOpacity>

          {/* Username */}
          <View className="flex-row items-center gap-2">
            <Text className="text-2xl font-medium">codeaura108</Text>
            <SimpleLineIcons name="arrow-down" color="#000" size={14} />
          </View>

          {/* Menu */}
          <View>
            <Text className="text-2xl">
              <Ionicons name="menu" color="#000" size={24} />
            </Text>
          </View>
        </View>

        {/* ---------- PROFILE ROW ---------- */}
        <View className="flex-row items-center">
          {/* DP */}
          <View className="items-center">
            <View className="w-24 h-24 rounded-full border-4 border-pink-500 items-center justify-center">
              <Image
                source={{ uri: "https://i.pravatar.cc/300?img=12" }}
                className="w-20 h-20 rounded-full"
              />
            </View>
          </View>

          {/* Stats */}
          <View className="flex-col ml-6">
            <Text className="font-semibold text-[16px] mb-2">
              Gyanendra Yadav
            </Text>

            <View className="flex-row justify-between w-56 gap-3">
              <View className="items-center">
                <Text className="text-lg font-bold">0</Text>
                <Text className="text-gray-600">posts</Text>
              </View>

              <View className="items-center">
                <Text className="text-lg font-bold">3</Text>
                <Text className="text-gray-600">followers</Text>
              </View>

              <View className="items-center">
                <Text className="text-lg font-bold">9</Text>
                <Text className="text-gray-600">following</Text>
              </View>

              <View className="items-center">
                <Text className="text-lg font-bold">9</Text>
                <Text className="text-gray-600">matches</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ---------- BIO ---------- */}
        <View className="mt-3">
          <Text className="text-gray-700">
            I am the all rounder programmer.
          </Text>
          <Text className="text-gray-700">goodbye</Text>
        </View>

        {/* ---------- BUTTONS ---------- */}
        <View className="flex-row mt-4 gap-2">
          <TouchableOpacity
            onPress={goToEdit}
            className="flex-1 bg-gray-200 py-2 rounded-lg items-center justify-center"
          >
            {loading ? (
              <ActivityIndicator size="small" />
            ) : (
              <Text className="text-center font-semibold">Edit profile</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openShare}
            className="flex-1 bg-gray-200 py-2 rounded-lg items-center justify-center"
          >
            {load ? (
              <ActivityIndicator size="small" />
            ) : (
              <Text className="text-center font-semibold">Share profile</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-gray-200 py-2 px-2 rounded-lg"
            onPress={() => setShowCard(!showCard)}
          >
            <Ionicons name="person-add-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ---------- DISCOVER PEOPLE ---------- */}
      {showCard && (
        <View className="mt-2">
          <View className="flex-row justify-between px-4 mb-3">
            <Text className="font-bold text-lg">Discover people</Text>
            <Text className="text-blue-500">See all</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-3"
          >
            {suggestions.map((item) => (
              <View
                key={item.id}
                className="w-36 bg-gray-100 rounded-xl p-3 mr-3 relative"
              >
                {/* Close Icon */}
                <TouchableOpacity className="absolute right-2 top-2">
                  <Ionicons name="close" size={18} color="#555" />
                </TouchableOpacity>

                {/* Profile Image */}
                <View className="items-center">
                  <Image
                    source={{ uri: item.img }}
                    className="w-20 h-20 rounded-full"
                  />
                </View>

                {/* Name */}
                <Text
                  className="text-center mt-2 font-semibold"
                  numberOfLines={1}
                >
                  {item.name}
                </Text>

                {/* Subtitle */}
                <Text className="text-xs text-gray-500 text-center mt-1">
                  {item.subtitle}
                </Text>

                {/* Follow Button */}
                <TouchableOpacity className="mt-3 bg-blue-600 py-2 rounded-md">
                  <Text className="text-center text-white font-bold">
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* ---------- EMPTY POST AREA ---------- */}
      {/* <View className="mt-10 items-center justify-center opacity-40">
        <Ionicons name="images-outline" size={70} color="#999" />
        <Text className="text-gray-400 text-lg mt-2">Photos and videos</Text>
      </View> */}
      <View className="flex-1 bg-white">
        {/* Profile Header here */}

        <ProfileTabs />
      </View>
      {/* ---------- CREATE MODAL ---------- */}
      <Modal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.4}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View className="bg-white p-5 rounded-t-3xl">
          {/* Drag bar */}
          <View className="w-14 h-1.5 bg-gray-400 self-center rounded-full mb-4" />

          <Text className="text-xl font-semibold mb-4 text-center">Create</Text>

          <View className="gap-5 mb-5">
            {/* Item 1 */}
            <View>
              <View className="h-[1px] bg-gray-100 w-full  -mt-3" />
              <View className="flex-row items-center gap-3">
                <Ionicons name="videocam-outline" size={24} />
                <Text className="text-lg">Live stream</Text>
              </View>
              <View className="h-[1px] bg-gray-100 w-full ml-10 mt-3" />
            </View>

            {/* Item 2 */}
            <View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="copy-outline" size={24} />
                <Text className="text-lg">Team</Text>
              </View>
              <View className="h-[1px] bg-gray-100 w-full ml-10 mt-3" />
            </View>

            {/* Item 3 */}
            <View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="images-outline" size={24} />
                <Text className="text-lg">Match</Text>
              </View>
              <View className="h-[1px] bg-gray-100 w-full ml-10 mt-3" />
            </View>

            {/* Item 4 */}
            <View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="videocam-outline" size={24} />
                <Text className="text-lg">Reel</Text>
              </View>
              <View className="h-[1px] bg-gray-100 w-full ml-10 mt-3" />
            </View>

            {/* Item 5 */}
            <View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="copy-outline" size={24} />
                <Text className="text-lg">Edits</Text>
              </View>
              <View className="h-[1px] bg-gray-100 w-full ml-10 mt-3" />
            </View>

            {/* Item 6 */}
            <View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="images-outline" size={24} />
                <Text className="text-lg">Post</Text>
              </View>
              <View className="h-[1px] bg-gray-100 w-full ml-10 mt-3" />
            </View>

            {/* Item 7 */}
            <View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="flash-outline" size={24} />
                <Text className="text-lg">Story</Text>
              </View>
              <View className="h-[1px] bg-gray-100 w-full ml-10 mt-3" />
            </View>

            {/* Item 8 */}
            <View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="albums-outline" size={24} />
                <Text className="text-lg">Highlight</Text>
              </View>
              <View className="h-[1px] bg-gray-100 w-full ml-10 mt-3" />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Profile;
