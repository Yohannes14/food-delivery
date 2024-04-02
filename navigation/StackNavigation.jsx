import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import CartScreen from '../screens/CartScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import OrderPrepairingScreen from '../screens/OrderPrepairingScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen options={{
                presentation: 'modal'
            }} name="Cart" component={CartScreen} />
            <Stack.Screen options={{
                presentation: 'fullScreenModal'
            }}
                name="OrderPrepairing"
                component={OrderPrepairingScreen} />
            <Stack.Screen name='Delivery' component={DeliveryScreen} />
        </Stack.Navigator>
    )
}

