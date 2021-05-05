import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import CovidData from '../containers/GeneralData';
import AppLoading from 'expo-app-loading';
import Header from '../containers/Header'

import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';

//const Stack = createStackNavigator();
// const spawn = require('child_process').spawn;

// (async function() {
// const pythonProccess = spawn('python3', ['C:\\Emil\\Proiecte\\Python\\Proiecte_Python\\Automation\\Covid-19\\covid19.py'])

// pythonProccess.stdout.on('data', (data) => {

//   mystr = data.toString();
//   myjson = JSON.parse(mystr);
//   global.link = myjson
//   console.log(myjson);
// })
// });


const Home = ({navigation}) => {
 
  const [data, setData] = React.useState(CovidData)

  function renderData() { 

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          top: 30,
        }}
      >
        <View style={{
          height:120,
          width: 310,
          backgroundColor: item.backgroundColor,
          borderRadius: 30,
          marginBottom: 30,
          
        }}
        >
      
          <Text 
            style={{
              marginTop: 20,
              marginLeft: 170,
              color: item.textColor,
              fontWeight: '500',
              position: 'absolute',
              //fontFamily: 'Roboto'
            }}
            
          >
            {item.description}
          </Text>

          <Text
              style={{
                marginTop: 20,
                marginLeft: 20,
                color: item.textColor,
                fontWeight: '500',
                fontSize: 25,
                //fontFamily: 'roboto'
              }}
            >
            {item.numberCases}
          </Text>

        </View>
      </TouchableOpacity>
    )

    return (
      <FlatList
          data={data}
          numColumns={1}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 140 }}
          style={{    
          }}
        />
    )
  }

  let [fontsLoaded] = useFonts ({
    Inter_900Black,
  })
  if (!fontsLoaded) {
    return <AppLoading/>
  } 
    return (   
     
      <SafeAreaView style={{
          flex: 1, 
          backgroundColor: '#f2f5fc',  
          alignItems: 'center',
          justifyContent: 'center' 
        }}
      >
        <Header backgroundColor='#293077'/>
        {renderData()}
      </SafeAreaView>  
    )
}

export default Home