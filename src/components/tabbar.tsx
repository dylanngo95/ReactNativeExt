import * as React from 'react';
import {
  View, StyleSheet, Text,
  TouchableOpacity,
} from 'react-native';

export interface TabbarProps {
  titles: string[];
  onChanged: any;
}

export interface TabbarState {
}

export default class Tabbar extends React.Component<TabbarProps, TabbarState> {
  public static defaultProps = {
    titles: [],
    onChanged: () => {},
  };

  constructor(props: TabbarProps) {
    super(props);
  }

  public render() {
    return (
      <View style={{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        }}>
        <View style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#323B45',
          opacity: 0.08,
          zIndex: 0,
        }}/>
         {
           this.props.titles.map((item, index) => (
             <TouchableOpacity
              key={index}
              onPress={() => {
                this.props.onChanged(index);
              }}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
              }}
              >
                <View style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: 5,
                  backgroundColor: 'blue',
                }}/>
               <Text>{item}</Text>
             </TouchableOpacity>
            ))
         }
      </View>
    );
  }
}
