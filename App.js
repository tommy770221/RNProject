import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

 class App extends React.Component {
   state={
     todo:"This is our message on screen",
       text:"this is text",
       todoList:["Learning Todo App","Build Apps","Build Todos"]
   }
   addTodo = () =>{
      this.setState({ todo : this.state.text})
   }
   renderTodos = ()=>{
       return this.state.todoList.map(t=>{
           return (
               <Text>{t}</Text>
           )
       })
   }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your</Text>
        <TextInput style={styles.inputStyle}
                   onChangeText={(text) => this.setState({todo:text})}/>

        <Button title={'Add todo'} color={'green'}
           onPress={this.addTodo}
        />
          <TextInput style={styles.inputStyle}
                     onChangeText={(text) => this.setState({text})}/>
        <Text>{this.state.todo}</Text>
          <Text>{this.state.text}</Text>
          {this.renderTodos()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    inputStyle:{
       height:40,
       borderColor:'green',
       borderWidth: 20
    }
});

export default App;