import { StatusBar } from 'expo-status-bar';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';


const App = () => {
  return (
    // This is where you would place your provider from Redux or Context API if you're using it.
    <AppNavigator />
  );
};

export default App;
