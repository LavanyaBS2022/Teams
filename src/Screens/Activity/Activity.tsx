import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../Utils/types";
import { TabScreens } from "../../Types/Screens";
import { Text, View } from "react-native";

type ActivityProp=NativeStackScreenProps<RootStackParamList,TabScreens.ACTIVITY>;

const Activity:React.FC<ActivityProp>=()=>{
    return(
        <View>
            <Text>Activity Screen</Text>
        </View>
    )
    }
    
    export default Activity;