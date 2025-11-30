import { View, Text } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

const CreateModal = ({ visible, close }: any) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={close}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View className="bg-white p-6 rounded-t-3xl">
        <View className="w-14 h-1 bg-gray-400 self-center mb-4 rounded-full" />
        <Text className="text-xl font-semibold text-center">Create</Text>
      </View>

      <View className=" bg-white gap-5 mb-5 pl-4">
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
    </Modal>
  );
};

export default CreateModal;
