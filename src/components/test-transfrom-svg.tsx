import * as React from 'react';
import {
  View, StyleSheet, Text, Dimensions
} from 'react-native';
import Svg, {
  Circle, Line, Path, Image, Rect, G
} from 'react-native-svg';

export interface SVGTranformProps {
}


export interface SVGTranformState {
}

export default class SVGTranformComponent extends React.PureComponent<SVGTranformProps, SVGTranformState> {
  constructor(props: SVGTranformProps) {
    super(props);
  }

  public render() {
    let trans = {translate: `'${50}, ${50}'`, rotate: `${20}`, scale: `${1}` };
    return (
      <View style={styles.container}>
         <Text>CircularSlider Component</Text>
          <Svg width={250} height={250}>
            {/* <Rect
              transform='rotate(45, 105, 32.5) translate(50 50)'
              width={50} height={50} x={100} y={100}/> */}
            {/* <Image
                x='5%'
                y='5%'
                width='200'
                height='50'
                preserveAspectRatio='xMidYMid slice'
                href={require('../../img/thumb.png')}
            /> */}

            <G  transform='rotate(45, 105, 32.5) translate(50 50) scale(0.100000,-0.100000)'
            fill='#000000' stroke='none'>
              <Path d='M0 225 l0 -225 1300 0 1300 0 0 225 0 225 -1300 0 -1300 0 0 -225z'/>
            </G>

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
