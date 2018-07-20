"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const test_transfrom_svg_1 = require("./components/test-transfrom-svg");
class AppComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onChanged = (index) => {
            console.log(index);
        };
    }
    render() {
        return (<react_native_1.View style={styles.container}>

        <test_transfrom_svg_1.default />

        
        
        
        
      </react_native_1.View>);
    }
}
exports.default = AppComponent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
