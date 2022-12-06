import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (data) => {

    return (
        <View style={styles.items}>
             <Text >{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    items: {
        backgroundColor: '#FFF',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 15,
    },
    items1:{
        paddingLeft: 100,
    }
})

export default Task;





















// const [taskitem, settaskitem] = useState([]);
// const delete1 = (index) =>{
//     let itermsCopy =[...taskitem];
//     itermsCopy.splice(index,1);
//     settaskitem(itermsCopy)
//     }