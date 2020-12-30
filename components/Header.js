import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 15,
        backgroundColor: 'blue'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Header;
