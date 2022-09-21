import {useNavigation} from '@react-navigation/native';
import {addDoc, collection, Firestore} from 'firebase/firestore';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AppRouteType} from '../../routes/App.routes';
import {database} from '../../utils/firebase';
import {styles} from './styles';

export function NewTask() {
  const navigation = useNavigation<AppRouteType>();
  const [description, setDescription] = useState<string>('');

  async function addTask(
    data: {description: string; status: boolean},
    databaseParam: Firestore,
  ) {
    const docRef = await addDoc(collection(databaseParam, 'Tasks'), data);
    console.log(docRef);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() =>
          addTask({description: description, status: false}, database)
        }>
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
