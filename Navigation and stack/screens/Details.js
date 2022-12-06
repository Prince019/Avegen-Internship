import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

const Details = ({ route }) => {

    return (
        <View style={styles.maincontainer1}>
            <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>User Name : </Text>
            <Text style={{ fontSize: 20 }}> {route.params.email}</Text>
            </View>
            </View>
    )
}
const styles = StyleSheet.create({
maincontainer1:{ 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' ,
    backgroundColor:"#d8bfd8",
},
container: {

    marginHorizontal: 85,
    marginVertical:320,
    backgroundColor:"white",
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    borderRadius:20,
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
})

export default Details