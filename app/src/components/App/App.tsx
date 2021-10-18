import React from 'react'
import { RootStackParamList } from '../../@Types/navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductList from '../ProductList'
import ProductDetails from '../ProductDetails'

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product List" component={ProductList} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
