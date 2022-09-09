import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {database, firebaseApp} from '../../utils/firebase';
import * as Styles from './styles';
export function Task() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    // database.collection('Tasks');
  });
  return (
    <View>
      <Text>Page task</Text>
    </View>
  );
}
