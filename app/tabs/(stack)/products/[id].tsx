import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import {View, Text} from 'react-native';

const ProductsScreen = () =>{
    const { id } = useLocalSearchParams();

    const product = products.find(p => p.id === id);

    if (!product) {
        return <Redirect href='/' />
    }

    return(
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-2xl'>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
        </View>
    )
};
export default ProductsScreen;