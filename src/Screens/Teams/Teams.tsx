import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../Utils/types";
import { NavScreen, TabScreens } from "../../Types/Screens";
import { Text, View } from "react-native";

type TeamsProps=NativeStackScreenProps<RootStackParamList,TabScreens.TEAMS>;
const Teams:React.FC<TeamsProps>=({navigation})=>{
return(
    <View>
        <Text>Chat Screen</Text>
    </View>
)
}

export default Teams;