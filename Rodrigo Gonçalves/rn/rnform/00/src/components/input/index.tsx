import React from 'react';
import { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Feather }  from '@expo/vector-icons';
import { styles } from './styles';
import { Controller, UseControllerProps } from 'react-hook-form';

type Props = {
    icon : keyof typeof Feather.glyphMap;
    formProps: UseControllerProps<any>;
    inputProps: TextInputProps;
    
};

const Input = forwardRef<TextInput, Props>(({ icon, formProps, inputProps }, ref) =>{
    return (
        <Controller 
        render={() => (
            
            <View style={styles.group}>
            <View style={styles.icon}>
                <Feather name={icon} size={22} color="#eb1111" />
             </View>   
            <TextInput 
            ref={ref}
            style={styles.control} 
            {...inputProps} />
        </View> 
    )}   
    {...formProps}
    />
    );
});
export { Input };