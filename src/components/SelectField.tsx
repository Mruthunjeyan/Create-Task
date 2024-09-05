// components/SelectField.tsx
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange: (e: SelectChangeEvent<string>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, options, onChange }) => {
  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
