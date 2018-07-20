import * as React from 'react';
import {
    View, StyleSheet, Text,
    Image, Animated, Easing,
    } from 'react-native';

export interface TransfromProps {
}

export interface TransfromState {
    valueAnimation: Animated.Value;
}

export default class TransfromComponent extends React.Component<TransfromProps, TransfromState> {
  constructor(props: TransfromProps) {
    super(props);
    this.state = {
        valueAnimation: new Animated.Value(0),
    };
  }

  public componentDidMount() {
    Animated.timing(
        this.state.valueAnimation,
        {
            toValue: 1,
            duration: 4000,
            delay: 100,
            easing: Easing.linear,
        }
    ).start();
  }

  public render() {

    let angle = this.state.valueAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    let angel = -10;
    let d = 1;
    let deltaX = -d * Math.cos(Math.PI * angel / 180);
    let deltaY = -d * Math.sin(Math.PI * angel / 180);

    return (
      <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
         <Image
            style={{
                position: 'absolute',
                width: 200,
                height: 50,
                resizeMode: 'stretch',
                tintColor: 'red',
                transform: [
                    { translateY: -100 },
                    { rotate: 90 + 'deg' },
                ],
            }}
            source={require('../../img/thumb.png')}/>
         <Animated.Image
            style={{
                position: 'absolute',
                width: 200,
                height: 50,
                resizeMode: 'stretch',
                transform: [
                    {
                        translateX: 0,
                    },
                    {
                        translateY: 0,
                    },
                    { rotate: angle },
                ],
            }}
            source={require('../../img/thumb.png')}/>
      </View>
    );
  }
}
