import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CircularSliderComponent from './components/circel-slider';

export interface AppProps {
}

export default class AppComponent extends React.Component<AppProps, any> {
  public render() {
    return (
      <View style={styles.container}>
       <CircularSliderComponent
        dialRadius={135}
        btnRadius={20}
        startAngel={10}
        endAngel={50}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});