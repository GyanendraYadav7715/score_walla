import { View } from "react-native";
import React, { useState } from "react";

import ProfileHeader from "../components/ProfileHeader";
import DiscoverPeople from "../components/DiscoverPeople";
import ProfileTabs from "../components/ProfileTabs";
import CreateModal from "../components/CreateModal";

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [showCard, setShowCard] = useState(false);

  return (
    <View className="flex-1 bg-white mt-7">
      <ProfileHeader
        openModal={() => setVisible(true)}
        toggleDiscover={() => setShowCard(!showCard)}
      />

      {showCard && <DiscoverPeople />}

      {/* FlatList is INSIDE this – NO SCROLLVIEW above it */}
      <ProfileTabs />

      <CreateModal visible={visible} close={() => setVisible(false)} />
    </View>
  );
};

export default Profile;
