import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Header, Switch } from 'native-extension';

const ComponentLeft = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-start'}} >
       <TouchableOpacity style={ {justifyContent: 'center', flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/ic_back.png')}
          style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}
        />
        <Text style={{ color: 'white' }}>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const ComponentCenter = () => {
  return(
    <View style={{ flex: 1 }}>
       <Image
        source={require('../../assets/images/ic_google.png')}
        style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
      />
    </View>
  );
};

const ComponentRight = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <Image
        source={require('../../assets/images/ic_profile.png')}
        style={{resizeMode: 'contain', width: 35, height: 35, marginRight: 10, alignSelf: 'flex-end' }}
      />
    </View>
  );
};


export interface AppProps {
}

export default class AppComponent extends React.Component<AppProps, any> {
  public render() {
    return (
      <View style={styles.container}>

        <Header
          componentLeft     = { () =>  <ComponentLeft />   }
          componentCenter   = { () =>  <ComponentCenter /> }
          componentRight    = { () =>  <ComponentRight />  }
          navigationBarStyle= {{ backgroundColor: '#215e79' }}
          statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
        />

        {/* <Tabbar
          titles={['Settings', 'Kills', 'Hack']}
          onChanged={this.onChanged}
        /> */}
        <Switch
          height={40}
          width={300}
          activeText={`Active Text`}
          inActiveText={`InActive Text`}
          onValueChange={(value: any) => console.log(value)}
        />
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
  },
});