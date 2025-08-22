import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
const StackLayout = () =>{
    return (
        <Stack 
            screenOptions={{
                //headerShown: false
                headerShadowVisible:false,
                contentStyle:{
                    backgroundColor:'white'
                }
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