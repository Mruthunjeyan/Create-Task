// components/ButtonGroup.tsx
import React from 'react';
import { Button, ButtonGroup as MuiButtonGroup } from '@mui/material';

interface ButtonGroupProps {
  onExecute: () => void;
  onFinish: () => void;
  onClose: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onExecute, onFinish, onClose }) => {
  return (
    <MuiButtonGroup variant="contained" fullWidth>
      <Button onClick={onExecute} color="primary">
        Execute
      </Button>
      <Button onClick={onFinish} color="success">
        Finish
      </Button>
      <Button onClick={onClose} color="error">
        Close
      </Button>
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
