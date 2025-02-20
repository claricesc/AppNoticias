import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Previsao from './Previsao';
import Moedas from './Moedas';

const Stack = createStackNavigator();

export default function RotasBotao(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='Moedas' component={Moedas}/>
    <Stack.Screen name='Previsao' component={Previsao}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}