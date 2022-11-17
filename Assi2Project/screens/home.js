import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import  { useState } from 'react';

const Home = ({ navigation }) => {

    const [text, setText] = useState('');
    
    return (
        <View style={styles.mainContainer}>
        
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='User Name'
                
                onChangeText={newText => setText(newText)}/>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate('Details',  {email:text})}>
                <Text style={styles.submitButtonText}> Login</Text>
            </TouchableOpacity>

        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: null,
        borderColor: '#7a42f4',
        borderWidth: 1,

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

    mainContainer: {
        flex : 1,
        backgroundColor:"#f7ebb0",
      },
      container: {

        marginHorizontal: 85,
        marginVertical:320,
        backgroundColor:"white",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius:20,
        flex: 1, justifyContent: 'center', alignItems: 'center' 
      },
});

export default Home