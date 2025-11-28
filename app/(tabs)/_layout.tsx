import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { ImageBackground, Text, Image } from "react-native";
import { icons } from "@/constants/icons";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
              >
                <Image
                  source={icons.home}
                  tintColor="#151312"
                  className="size-5"
                />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground
                 
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
              >
                <Image
                  source={icons.search}
                  tintColor="#151312"
                  className="size-5"
                />
                <Text>Search</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
         
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground
                 
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
              >
                <Image
                  source={icons.person}
                  tintColor="#151312"
                  className="size-5"
                />
                <Text>Profile</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarLabel: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground
                 
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
              >
                <Image
                  source={icons.save}
                  tintColor="#151312"
                  className="size-5"
                />
                <Text>Saved</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
