import { Box } from '../';
import React from 'react';
import { SignUpFormShema }     from './SignUpFormShema';

type SignUpFormProps = {
  onSubmit: (data: SignUpFormShema) => void;
};

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  const handleSubmit = (data: SignUpFormShema) => {
    onSubmit(data);
  };    
    return (
        <Box>
            SignUpForm
        </Box>
    );
}

export default SignUpForm;