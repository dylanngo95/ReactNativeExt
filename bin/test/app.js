"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const native_extension_1 = require("native-extension");
const ComponentLeft = () => {
    return (<react_native_1.View style={{ flex: 1, alignItems: 'flex-start' }}>
       <react_native_1.TouchableOpacity style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <react_native_1.Image source={require('../../assets/images/ic_back.png')} style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}/>
        <react_native_1.Text style={{ color: 'white' }}>Back Home</react_native_1.Text>
      </react_native_1.TouchableOpacity>
    </react_native_1.View>);
};
const ComponentCenter = () => {
    return (<react_native_1.View style={{ flex: 1 }}>
       <react_native_1.Image source={require('../../assets/images/ic_google.png')} style={{ resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}/>
    </react_native_1.View>);
};
const ComponentRight = () => {
    return (<react_native_1.View style={{ flex: 1, alignItems: 'flex-end' }}>
      <react_native_1.Image source={require('../../assets/images/ic_profile.png')} style={{ resizeMode: 'contain', width: 35, height: 35, marginRight: 10, alignSelf: 'flex-end' }}/>
    </react_native_1.View>);
};
class AppComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onChanged = (index) => {
            console.log(index);
        };
    }
    render() {
        return (<react_native_1.View style={styles.container}>

        <native_extension_1.Header componentLeft={() => <ComponentLeft />} componentCenter={() => <ComponentCenter />} componentRight={() => <ComponentRight />} navigationBarStyle={{ backgroundColor: '#215e79' }} statusBarStyle={{ barStyle: 'light-content', backgroundColor: '#215e79' }}/>

        
        <native_extension_1.Switch height={40} width={300} activeText={`Active Text`} inActiveText={`InActive Text`} onValueChange={(value) => console.log(value)}/>
        
      </react_native_1.View>);
    }
}
exports.default = AppComponent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
