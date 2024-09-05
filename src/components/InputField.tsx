// components/InputField.tsx
import React from 'react';
import { TextField } from '@mui/material';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      variant="outlined"
    />
  );
};

export default InputField;
