import React, { Component } from 'react';
import {
    Image,
    TextInput,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native'; 
  

export default class ProfileCard extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.rowContainer}>
                    <View style={styles.leftStyle}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../assets/images/hamou.jpg')}
                        />
                    </View>
                    <View style={styles.rightStyle}>
                        <View style={styles.startStyle}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconStyleRight}
                                    source={require('../../assets/images/star.png')}
                                    />
                            </TouchableOpacity>
                        </View> 
                        <View style={styles.infoStyle}>
                            <View style={styles.infoTextStyle}>
                                <Image
                                style={styles.iconStyle}
                                source={require('../../assets/images/person.png')}
                                />
                                <Text style={styles.infoTextStyle}>
                                    Hamou Ait 
                                </Text>
                            </View>
                            <View style={styles.infoTextStyle}>
                                <Image
                                style={styles.iconStyle}
                                source={require('../../assets/images/search.png')}
                                />
                                <Text style={styles.participantInfo}>
                                    Developpeur Full Stack
                                </Text>
                            </View>
                            <View style={styles.infoTextStyle}>
                                <Image
                                style={styles.iconStyleModified}
                                source={require('../../assets/images/profession.jpeg')}
                                />
                                <Text style={styles.participantInfo}>
                                    Etudiant
                                </Text>  
                            </View>
                            <View style={styles.infoTextStyle}>
                                <Image
                                    style={styles.iconStyleModified}
                                    source={require('../../assets/images/building.png')}
                                    />
                                <Text style={styles.participantInfo}>
                                    ESI
                                </Text>
                        </View> 
                        </View>
                    </View>
                </View>
                <View style={styles.inputStyle}>
                    <TextInput                          
                        placeholder = 'Description'>                        
                    </TextInput>
                </View>        
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: { 
        margin: 20, 
        borderColor: "black",
        shadowColor: "#000",
        shadowOffset:
            {
                width: 0,
                height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        flexDirection: 'column',
        height: 350
    },
    rowContainer: {
        flexDirection: 'row',
        paddingRight: '8%',
        paddingLeft: '8%',
        flex: 2
    },
    inputStyle: { 
        borderColor: 'gray',
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 15,
        margin: '8%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 0,
    },
    infoStyle: {
        flexDirection: 'column',
        marginLeft: '8%',
        flex: 1,
        justifyContent: 'center',
    },
    participantInfo: {
        color: 'gray',   
    },
    imageStyle: { 
        borderWidth: 1, 
        borderColor: '#d6d7da', 
        borderRadius: 100, 
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    startStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconStyle: {
        width: 20, 
        height: 20
    },
    rightStyle:{
        flex: 9,
        marginTop: 10
    },
    leftStyle: {
        flex: 7,
        justifyContent: 'center',
    },
    iconStyleModified: {
        width: 15, 
        height: 15,
    },
    iconStyleRight: {
        width: 25,
        height: 25,
        right: 0
    },
    infoTextStyle:{
        flexDirection: 'row',
        width: '100%',
    }
  });