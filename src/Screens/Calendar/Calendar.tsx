import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../Utils/types";
import { TabScreens } from "../../Types/Screens";
import { Text, View } from "react-native";

type CalendarProps=NativeStackScreenProps<RootStackParamList,TabScreens.CALENDAR>;
const Calendar:React.FC<CalendarProps>=({navigation})=>{
return(
    <View>
        <Text>Calendar Screen</Text>
    </View>
)
}

export default Calendar;