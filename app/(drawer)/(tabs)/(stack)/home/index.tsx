import {View, Text } from 'react-native';
import { Link,router, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions } from '@react-navigation/native';
import CustomButton from '@/components/shared/CustomButton';
const HomeScreen = () =>{

    const navigation = useNavigation();


    const onToggleDrawer = () =>{
        navigation.dispatch( DrawerActions.toggleDrawer)
    }
    return(
        <SafeAreaView>
            <View className='px-10 mt-5'>
                 <CustomButton
                    className="mb-2"
                    color='primary'
                    onPress={() => router.push('/products')}
                >
                    Products
                </CustomButton>

                <CustomButton
                    className="mb-2"
                    color='secondary'
                    onPress={() => router.push('/profile')}
                >
                   Profile
                </CustomButton>

                <CustomButton
                    className="mb-2"
                    color='tertiary'
                    onPress={() => router.push('/settings')}
                >
                   Ajustes
                </CustomButton>

                <CustomButton
                    variant='text-only'
                    className="mb-2"
                    color='primary'
                    onPress={() => router.push('/drawer/tabs/settings')}
                >
                   Productos
                </CustomButton>
                <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>

               {/* <Link href="/products" asChild>
                    <CustomButton
                        className="mb-2"
                    color='primary'
                    > Productos</CustomButton>
                </Link>+
                <CustomButton
                    className="mb-2"
                    color='primary'
                    onPress={() => router.push('/products')}
                >
                    Productos
                </CustomButton>
                
                <CustomButton
                    className="mb-2"
                    variant='text-only'
                    onPress={() => router.push('/profile')}> Productos</CustomButton>
                */}
             {/*   <Link className='mb-5' href="/products">Productos</Link>
                <Link className='mb-5' href="/profile">Profile</Link>
                <Link className='mb-5' href="/settings">Ajustes {}</Link>*/}
            </View>
        </SafeAreaView>  
    )
}
export default HomeScreen;