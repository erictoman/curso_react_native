

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View, StyleSheet
} from 'react-native';
import Item from './Components/Item';



const App = () => {


  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={
            styles.container
          }>
          {getRandomNames().map((name, index) => {
            return <Item nombre={name} key={index} />
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

//Return 100 random names
const getRandomNames = () => {
  let names = [];
  for (let i = 0; i < 100; i++) {
    names.push(getRandomName());
  }
  return names;
}

//Return a random name
const getRandomName = () => {
  let names = ["dadadasdadasdadadasdaasadad", "asdasdasdasdadadasdadasdadasdasda", "dasdsadsadasdasdasdasdasda", "dasdadasdasdasasdaadadasd"];
  return names[Math.floor(Math.random() * names.length)];
}




export default App;
