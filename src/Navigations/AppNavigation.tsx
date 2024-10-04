import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Utils/types";
import { NavScreen, TabScreens } from "../Types/Screens";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack=createNativeStackNavigator<RootStackParamList>();
const NonAuthStack=createNativeStackNavigator<RootStackParamList>();

const AuthStackScreen=()=>(
    <AuthStack.Navigator>
        <NonAuthStack.Screen name={NavScreen.TAB_NAVIGATION}
        component={TabNavigation}
        options={{ headerShown: false }}/>
    </AuthStack.Navigator>
)


const AuthNavigation=()=>{
    return(
        <NavigationContainer>
            <AuthStackScreen/>
        </NavigationContainer>
    )
}

export default AuthNavigation;