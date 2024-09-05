// components/RadioButtonGroup.tsx
import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface RadioButtonGroupProps {
  label: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ label, value, options, onChange }) => {
  return (
    <FormControl component="fieldset" margin="normal">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
