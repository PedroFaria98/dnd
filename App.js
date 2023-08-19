import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Link } from 'react-native';
import Container from './src/navigation/inde';



export default function App() {
  return ( <Container/>

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

