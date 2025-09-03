import { Stack, useNavigation } from 'expo-router';
import { View, Text } from 'react-native';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';





const StackLayout = () =>{

    const navigation = useNavigation();

    const onHeaderLeftCLick = (canGoBack:boolean) =>{
       if (canGoBack) {
         navigation.goBack(); // ✅ más seguro que StackActions.pop()
        return;
    }
        navigation.dispatch(DrawerActions.toggleDrawer());
    }
    return (
        <Stack 
            screenOptions={{
                //headerShown: false,
                headerShadowVisible:false,
                contentStyle:{
                    backgroundColor:'white'
                },
                headerLeft: ({tintColor,canGoBack}) =>
                    <Ionicons name={canGoBack ? 'arrow-back-outline':'grid-outline'} size={20} className='mr-10'
                    onPress={()=>onHeaderLeftCLick(canGoBack)}/>
            }}>
            <Stack.Screen
            name='home/index'
            options={{
                title: 'Home Screen'
            }}
            />

            <Stack.Screen
            name='products/index'
            options={{
                title: 'Productos Screen',
                animation:'fade'
            }}
            />

            <Stack.Screen
            name='settings/index'
            options={{
                title: 'Settings Screen',
                animation:'fade_from_bottom'
            }}
            />

            <Stack.Screen
            name='profile/index'
            options={{
                title: 'Profile Screen',
                animation:'simple_push'
            }}
            />
            </Stack>
    )
}

export default StackLayout;