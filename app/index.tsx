import { Text, View,SafeAreaView} from 'react-native'
import { Link ,Redirect } from 'expo-router';

const App = () => {
// para que nuestra aplicacion inicie desde una ruta en especial
//return <Redirect href="/tabs"/>
//return <Redirect href="/drawer"/>
return <Redirect href="/home"/>
/*    return (
       <SafeAreaView>
            <View className='mt-6 mx-5'>
                <Text className='text-4xl text-primary font-work-black'>App</Text>
                <Text className='text-3xl text-secondary font-work-medium'>App</Text>
                <Text className='text-2xl text-secondary-100 font-work-light'>App</Text>
                <Text className='text-xl text-ternarity font-work-light'>App</Text>
                <Link href="/products">Productos</Link>
            </View>
       </SafeAreaView> 
       
    )*/


}
export default App;