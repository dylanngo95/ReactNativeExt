"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const circel_slider_1 = require("./components/circel-slider");
class AppComponent extends React.Component {
    render() {
        return (<react_native_1.View style={styles.container}>
       <circel_slider_1.default dialRadius={135} btnRadius={20} startAngel={10} endAngel={50}/>
      </react_native_1.View>);
    }
}
exports.default = AppComponent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
