"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_native_svg_1 = require("react-native-svg");
class CircularSliderComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<react_native_1.View>
         <react_native_1.Text>CircularSlider Component</react_native_1.Text>
          <react_native_svg_1.default width="500" height="500">
            <react_native_svg_1.Circle cx="50" cy="50" r="20"></react_native_svg_1.Circle>
          </react_native_svg_1.default>
      </react_native_1.View>);
    }
}
exports.default = CircularSliderComponent;
