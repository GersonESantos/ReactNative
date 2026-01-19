import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather }   from '@expo/vector-icons';


export const styles = StyleSheet.create({
    container: {
        width: '100%', // Corrected typo from 'with' to 'width'
    },
    group: {
        flex: 1,
        width: '100%',
        height: 56,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16, 
        overflow: 'hidden',
    },
    icon: {
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRightWidth: 3,
        borderRightColor: '#f4f5f6',
    },
    control: {
        flex: 1,
        height: 56,
        width: '100%',
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
    },
});


