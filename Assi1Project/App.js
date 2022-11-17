import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
  state = {
    initialValue: 1000,
    inputValue:0,
  }
  setValue = (text) => {
    this.setState({ inputValue: text })
  }
  add = (num) => {
    this.setState({initialValue : parseInt(this.state.initialValue) + parseInt(this.state.inputValue) }); 
  }
  substract = (num) => {
    this.setState({initialValue : parseInt(this.state.initialValue) - parseInt(this.state.inputValue) }); 
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        
      <View style={styles.container}>
      
        <Text style={styles.input}>{this.state.initialValue}</Text>

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Number"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.setValue} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.add(this.state.inputValue)
          }>
          <Text style={styles.submitButtonText}> Add </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton1}
          onPress={
            () => this.substract(this.state.inputValue)
          }>
          <Text style={styles.submitButtonText}> Subtract </Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}


export default Inputs

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    backgroundColor:"#f7ebb0",
    // textAlign: 'center', // <-- the magic
    // fontWeight: 'bold',
    // fontSize: 18,
    // marginTop: 0,
    // width: 200,
  },
  container: {
    paddingTop: 10,
    marginHorizontal: 45,
    marginVertical:320,
    backgroundColor:"white",
    width: null,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
  },
  input: {
    margin: 15,
    height: 40,
    width: null,
    borderColor: '#7a42f4',
    borderWidth: 1,
    display: "flex",
    padding: 10,
    alignItems: "center",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: `#ff69b4`,
    padding: 10,
    margin: 15,
    height: 40,
    textAlign: "center",
  },
  submitButton1: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    textAlign: "center",
  },
  submitButtonText: {
    color: 'white'
  }
})



