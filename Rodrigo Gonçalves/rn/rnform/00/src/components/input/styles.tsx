import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather }   from '@expo/vector-icons';


export const styles = StyleSheet.create({
    container: {
        width: '100%', // Corrected typo from 'with' to 'width'
    },
    group: {
        width: '100%',
        height: 56,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    icon: {
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRightWidth: 3,
        borderRightColor: '#ccc',
    },
    control: {
    },
});


