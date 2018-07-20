import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CircularSliderComponent from './components/circel-slider';
import SwitchComponent from './components/switch-component';
import TransfromComponent from './components/test-transfrom-temp';
import TabbarComponent from './components/tabbar-component';
import SVGTranformComponent from './components/test-transfrom-svg';

export interface AppProps {
}

export default class AppComponent extends React.Component<AppProps, any> {
  public render() {
    return (
      <View style={styles.container}>

        <SVGTranformComponent/>

        {/* <TabbarComponent
          titles={['Settings', 'Kills', 'Hack']}
          onChanged={this.onChanged}
        /> */}
        {/* <TransfromComponent /> */}
        {/* <SwitchComponent
          height={40}
          width={300}
          activeText={`Active Text`}
          inActiveText={`InActive Text`}
          onValueChange={(value: any) => console.log(value)}
        /> */}
        {/* <CircularSliderComponent
        dialRadius={135}
        btnRadius={20}
        startAngel={10}
        endAngel={50}/> */}
      </View>
    );
  }

  public onChanged = (index: number) => {
    console.log(index);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});