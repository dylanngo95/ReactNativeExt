"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_native_svg_1 = require("react-native-svg");
class TestTranformComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (<react_native_1.View style={styles.container}>
         <react_native_1.Text>CircularSlider Component</react_native_1.Text>
          <react_native_svg_1.default width={200} height={200}>
          <react_native_svg_1.Image x='5%' y='5%' width='100%' height='100%' preserveAspectRatio='xMidYMid slice' href={require('../../img/thumb.png')}/>
          </react_native_svg_1.default>
      </react_native_1.View>);
    }
}
exports.default = TestTranformComponent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
