import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Car from './src/component/Car';
import Motorcycle from './src/component/Motorcycle';

export default function App() {
  return (
    //<Car />
    <Motorcycle />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
