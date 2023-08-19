import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../view/Home";
import Config from "../view/Config";
import CharScreen from "../view/CharScreen";

const Stack = createNativeStackNavigator();

export default function Container() {
  const [data, setData] = useState([])

  console.log("minha data", data)

  useEffect(() => {
    fetch('https://api.github.com/users/pedrofaria98/repos').then(data => data.json()).then(response => setData(response))
  })

  return (
    //   <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />     
    //      <Stack.Screen name="Config" component={Config} />
    //      <Stack.Screen name="CharScreen" component={CharScreen}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.Container}>
      {
        data.map((item) => {
        return(
          <View>
            <Text>{item}</Text>
          </View>
        )
        })
      }
    </View>
  );
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})