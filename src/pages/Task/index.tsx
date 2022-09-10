import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {database, deleteTask, getTasks} from '../../utils/firebase';
import FontAweasome from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {AppRouteType} from '../../routes/App.routes';
export function Task() {
  const navigation = useNavigation<AppRouteType>();
  const [task, setTask] = useState<any[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  async function deleteTaskAction(id: string) {
    // await deleteDoc(doc(database, 'Tasks', id));
    deleteTask(database, id);
    setRefresh(!refresh);
  }
  // useEffect
  useEffect(() => {
    async function action() {
      const tasks = await getTasks(database);

      setTask(tasks);
    }
    action();
  }, [refresh]);
  useEffect(() => {
    console.log(task);
  }, [task]);
  return (
    <View style={styles.container}>
      <FlatList
        data={task}
        showsVerticalScrollIndicator={false}
        renderItem={item => {
          return (
            <View style={styles.contextAllTasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  console.log(item.item.id);

                  deleteTaskAction(item.item.id);
                }}>
                <FontAweasome name="trash" color={'red'} />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          navigation.navigate('newTask');
        }}>
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
