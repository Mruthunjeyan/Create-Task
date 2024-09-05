// components/CheckboxField.tsx
import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, checked, onChange }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};

export default CheckboxField;
