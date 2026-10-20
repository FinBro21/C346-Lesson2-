import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Function Component
function Welcome(props) {
  return (
    <Text>
      Welcome to {props.code} - {props.name}
    </Text>
  );
}

// Class Component
class ModuleInfo extends React.Component {
  render() {
    return (
      <View>
        <Text>These are my modules this semester:</Text>

        <Welcome
          code="C346"
          name="Mobile App Development"
        />

        <Welcome
          code="C105"
          name="Introduction to Programming"
        />

        <Welcome
          code="C337"
          name="Immersive Technologies"
        />
      </View>
    );
  }
}

// Import React for Class Component
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <ModuleInfo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 10,
  },
});


