import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      {/* voiture 1 */}
      <CarItem name={'Model S'} tagLine={'Starting from 99,500$'} tagLineCta={'Touchless Delivery'} image={require('./assets/images/ModelX.jpeg')}/>

      {/* voiture 2 */}


      <StatusBar style="auto" />
    </View>
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
