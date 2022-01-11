import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Container from './assets/container/container'
import styles from './assets/Styles/styles'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>text!!!</Text>
      <Container></Container>
      <StatusBar style="auto" />
    </View>
  );
}

