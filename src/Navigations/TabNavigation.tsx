import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList, TabParamList } from "../Utils/types";
import { NavScreen, TabScreens } from "../Types/Screens";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Chat from "../Screens/Chat/Chat";
import { RouteProp } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Activity from "../Screens/Activity/Activity";
import Calendar from "../Screens/Calendar/Calendar";
import Teams from "../Screens/Teams/Teams";
import More from "../Screens/More/More";
const Tab = createBottomTabNavigator();

type TabNavigationProps = NativeStackScreenProps<RootStackParamList, NavScreen.TAB_NAVIGATION>;

const TabNavigation: React.FC<TabNavigationProps> = ({ navigation }) => {
    const icons = {
        Activity: 'bell-outline',
        Chat: 'chat',
        Teams: 'microsoft-teams',
        Calendar: 'calendar-month-outline',
        More: 'dots-horizontal',
        Profile: 'account-circle',
        search: 'magnify'

    }
    const Tab = createBottomTabNavigator<TabParamList>();

    const getScreenOptions = (route: RouteProp<TabParamList, keyof TabParamList>): BottomTabNavigationOptions => {
        return {
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 15 }}>
                    <Icon name="account-circle" size={35} color="black" />
                </TouchableOpacity>
            ),
            headerTitle: () => (
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>{route.name}</Text>
            ),
            headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 15 }}>
                    <TouchableOpacity>
                        <Icon name="filter-variant" size={25} color="black" style={{ marginRight: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name="magnify" size={25} color="black"  />
                    </TouchableOpacity>
                </View>
            ),
            tabBarIcon: ({ color }) => (
                <Icon name={icons[route.name]} style={{ color }} size={28} />
            ),
        };
    };
    return (
        <Tab.Navigator initialRouteName={TabScreens.CHAT} screenOptions={({ route }) => getScreenOptions(route)}>
            <Tab.Screen name={TabScreens.ACTIVITY} component={Activity}></Tab.Screen>
            <Tab.Screen name={TabScreens.CHAT} component={Chat}></Tab.Screen>
            <Tab.Screen name={TabScreens.TEAMS} component={Teams}></Tab.Screen>
            <Tab.Screen name={TabScreens.CALENDAR} component={Calendar}></Tab.Screen>
            <Tab.Screen name={TabScreens.MORE} component={More} />
        </Tab.Navigator>
    )
}

export default TabNavigation;
