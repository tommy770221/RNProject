import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

 class App extends React.Component {
   state={
     todo:"This is our message on screen",
     text:"this is text",
     todoList:["Learning Todo App","Build Apps","Build Todos"],
     todoListTwo:[],
     textListInput:"",
   }
   addTodo = () =>{
      this.setState({ todo : this.state.text})
   }
   renderTodos = ()=>{
       return this.state.todoList.map(t=>{
           return (
               <Text key={t}>{t}</Text>
           )
       })
   }
   addTodoList = () =>{
         var newTodo=this.state.textListInput;
         var arr=this.state.todoListTwo;
         arr.push(newTodo);
         this.setState({todoListTwo:arr,textListInput:""});
   }
   deleteTodo = (t) =>{
       var arr=this.state.todoListTwo;
       var pos=arr.indexOf(t);
       arr.splice(pos,1)
       this.setState({todoListTwo:arr});
   }
   renderTodosList = ()=>{
        return this.state.todoListTwo.map(te=>{
         return (
                <Text key={te}
                onPress={() =>{this.deleteTodo(te)}}
                >{te}</Text>
            )
        })
   }


  render(){
    return (
        <View style={styles.wholeStyle}>
          <View style={styles.container}>
            <Text style={styles.header}>Note App</Text>
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
              <Button title={'Add todo Two'} color={'blue'}
                      onPress={this.addTodoList}
              />
             <TextInput style={styles.inputStyle}
                         onChangeText={(textTwo) => this.setState({textListInput:textTwo})}
                        value={this.state.textListInput}
                        />
              {this.renderTodosList()}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wholeStyle:{
        flex:1,
      backgroundColor:'#3d00e0'
    },
    container: {
      marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    backgroundColor:'#64B5F6'
  },
    inputStyle:{
       height:40,
       borderColor:'red',
       borderWidth: 1
    },
    header:{
      fontSize:30,
      color :'green',
      fontWeight:'bold'
    }
});

export default App;