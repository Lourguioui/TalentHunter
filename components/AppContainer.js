import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AppBar from '../components/AppBar';
import FloatingActionButton from '../components/FloattingActionButton';

export default class AppContainer extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <FloatingActionButton navigation={this.props.navigation}/>
                <AppBar />
            </View>
        );
    }
}

// export default function AppContainer() {
//     return (
//         <View style={styles.container}> 
//             <FloatingActionButton />
//             <AppBar />
//         </View>
//     );
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonStyle: {
        // width: '100%',
        // flex: 1,
        // position: 'absolute',
        // bottom: 100,
        // height: 60,
        // zIndex: 30,
        // elevation: 30,
        // alignSelf: 'center'

    }
});
