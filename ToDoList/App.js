import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './component/task'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {

  const [task, setTask] = useState();
  const [taskitem, settaskitem] = useState([]);

  const add = () => {
    settaskitem([...taskitem, task])
    setTask(null)
  }

  const delete1 = (index) => {
    let itermsCopy = [...taskitem];
    itermsCopy.splice(index, 1);
    settaskitem(itermsCopy)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.part1} >My Tasks For Today</Text>
      <View style={styles.part2}>
        {
          taskitem.map((item, index) => {
            return (
              <TouchableOpacity>
                <Task text={item} />
                <Text style={styles.items1} onPress={() => delete1(index)}>
                  <Icon name="delete" size={30} color="#900" />
                </Text>
              </TouchableOpacity>)
          })
        }

      </View>

      <View>
        <TextInput style={styles.inputbox} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)}></TextInput>
      </View>

      <View>
        <TouchableOpacity style={styles.circle} onPress={() => 
        {
          if(task ){
            add()
          }else{
            alert('Please enter the task')
          }
        }
        }
           >
          <Text >
            <Icon name="content-save" size={30} color="#161" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: '#b3c7fc'
  },
  part2: {
    paddingBottom: 40,
    paddingTop: 50,
    alignItems: 'center',
  },
  part1: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  inputbox: {
    backgroundColor: '#FFF',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    paddingBottom: 500,
    paddingTop: 500,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 60,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  items1: {
    paddingLeft: 200,
    paddingBottom: 10,
  }
});


