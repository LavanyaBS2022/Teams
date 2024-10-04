import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../Utils/types";
import { NavScreen, TabScreens } from "../../Types/Screens";
import { Text, View } from "react-native";

type ChatProps=NativeStackScreenProps<RootStackParamList,TabScreens.CHAT>;
const Chat:React.FC<ChatProps>=({navigation})=>{
return(
    <View>
        <Text>Chat Screen</Text>
    </View>
)
}

export default Chat;