import * as React from 'react';
import {
  View, StyleSheet, Text, Dimensions
} from 'react-native';
import Svg, {
  Circle, Line, Path,
} from 'react-native-svg';

export interface CircularSliderProps {
  dialRadius: number;
  btnRadius: number;
  startAngel: number;
  endAngel: number;
  xCenter?: number;
  yCenter?: number;
}

const defaultProps = {
  xCenter: Dimensions.get('window').width / 2,
  yCenter: Dimensions.get('window').height / 2,
};

export interface CircularSliderState {
}

export default class CircularSliderComponent extends React.PureComponent<CircularSliderProps, CircularSliderState> {
  public static defaultProps = defaultProps;

  constructor(props: CircularSliderProps) {
    super(props);
  }

  public render() {

    // let width = (this.props.dialRadius * this.props.btnRadius) * 2;
    let width = 500;
    let DR = this.props.dialRadius;

    return (
      <View style={styles.container}>
         <Text>CircularSlider Component</Text>
          <Svg width={width} height={width}>
            <Circle cx={width / 2} cy={width / 2} r={DR} stroke='green' strokeWidth='5' fill='yellow'></Circle>
            <Path stroke='red' strokeWidth='5' fill='none'
              d='M100,50 C140,150  130,150, 250,60'
            ></Path>
          </Svg>
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
