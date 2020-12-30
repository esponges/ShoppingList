import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {uuid} from 'uuid';

/* Default function */

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>z</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


const App = () => {
  let uuid = require("uuid");
  // const random = Math.random() * (100,10000) + 10000;
  const [items, setItems] = useState([
    {id: uuid.v1(), text: 'Milk'},
    {id: uuid.v1(), text: 'Eggs'},
    {id: uuid.v1(), text: 'Bread'},
    {id: uuid.v1(), text: 'Juice'},
  ]);
  
  /*Will pass this function as prop to ListItem component */
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id); // use filter method to setState to prevItems and delete clicked item
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please type item', [{text: 'ok'}]);
    } else {
      setItems(prevItems => {
        return [{id: uuid.v1(), text: text}, ...prevItems]; //...prevItems call all the items array
      });  
    }    
  };

  // const renderItem = ({ item }) => (
  //   <Text title={item.text}/>
  // )

  return (
    <View style={styles.container}>
      {/* {console.log(uuid.v1())} */}
      <Header title="Shopping list" />
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        keyExtractor= {item => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
      {/* <Text style={styles.text}>Hello World FROG?</Text> */}
      {/* <Image
        source={{
          uri:
            "http://nateology.com/wp-content/uploads/White_lipped_tree_frog_cairns_jan_8_2006.jpg",
        }}
        style={styles.img}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontSize: 30
  },
  // text: {
  //   color: 'red',
  //   fontSize: 30
  // },
  // img: {
  //   marginTop: 20,
  //   height: 100,
  //   width: 100,

  // }
});

export default App;