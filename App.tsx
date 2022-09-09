import {NavigationContainer} from '@react-navigation/native';
import {RouteManager} from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <RouteManager />
    </NavigationContainer>
  );
}
