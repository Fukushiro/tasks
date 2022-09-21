import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore';
import {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {database, deleteTask, getTasks} from '../../utils/firebase';
import FontAweasome from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {AppRouteType} from '../../routes/App.routes';
import Config from 'react-native-config';
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

  // useFocusEffect
  useFocusEffect(
    useCallback(() => {
      async function action() {
        const tasks = await getTasks(database);

        setTask(tasks);
      }
      action();
    }, [refresh]),
  );
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
                <FontAweasome name="trash" color={'#F92E6A'} size={23} />
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={() => {
                  navigation.navigate('details', {
                    id: item.item.id,
                    description: item.item.description,
                  });
                }}>
                {item.item.description}
              </Text>
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
