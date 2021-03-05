import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
  }

  return (
    <View style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <TextInput 
          placeholder="Enter Todo Item"
          style={styles.textInput}
          onChangeText={text => setTodoItem(text)}
          value={todoItem}
        />
        <Button
          title="Add Todo"
          onPress={addTodoList}
        />
      </View>
      <View>
        <Text>List of Todos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },

  textInput: {
    padding: 10,
    borderColor: 'black',
    marginBottom: 10,
    borderWidth: 1,
  }
});
