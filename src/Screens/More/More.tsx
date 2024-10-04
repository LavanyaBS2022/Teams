import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../Utils/types";
import { NavScreen, TabScreens } from "../../Types/Screens";
import { Text, View } from "react-native";

type MoreProps=NativeStackScreenProps<RootStackParamList,TabScreens.MORE>;
const More:React.FC<MoreProps>=({navigation})=>{
return(
    <View>
        <Text>More Screen</Text>
    </View>
)
}

export default More;