import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Detail} from '../pages/Details';
import {NewTask} from '../pages/NewTask';
import {Task} from '../pages/Task';

type AppRouteParam = {
  task: undefined;
  newTask: undefined;
  details: {id: number; description: string};
};

export type AppRouteType = NativeStackNavigationProp<AppRouteParam>;
const Stack = createNativeStackNavigator<AppRouteParam>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="task">
      <Stack.Screen name="task" component={Task} />
      <Stack.Screen name="newTask" component={NewTask} />
      <Stack.Screen name="details" component={Detail} />
    </Stack.Navigator>
  );
}
