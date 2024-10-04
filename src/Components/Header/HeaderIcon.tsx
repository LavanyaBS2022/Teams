import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { TabParamList } from '../../Utils/types';

interface HeaderIconsProps {
  route: RouteProp<TabParamList, keyof TabParamList>;
}

const HeaderIcons: React.FC<HeaderIconsProps> = ({ route }) => {
    const navigation = useNavigation();

    return (
        <>
            {/* Left Icon */}
            <TouchableOpacity style={{ marginLeft: 15 }} >
                <Icon name="account-circle" size={35} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{route.name}</Text>

            {/* Right Icons */}
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                <TouchableOpacity onPress={() => console.log('Search icon clicked')}>
                    <Icon name="magnify" size={25} color="black" style={{ marginRight: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('More options clicked')}>
                    <Icon name="dots-vertical" size={25} color="black" />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default HeaderIcons;
