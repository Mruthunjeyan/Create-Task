import React, { useState } from 'react';
import InputField from './components/InputField';
import SelectField from './components/SelectField';
import CheckboxField from './components/CheckboxField';
import RadioButtonGroup from './components/RadioButtonGroup';
import ButtonGroup from './components/ButtonGroup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';

const App: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const [taskType, setTaskType] = useState<string>('');
  const [reportType, setReportType] = useState<string>('');
  const [passwordProtected, setPasswordProtected] = useState<boolean>(false);
  const [filePassword, setFilePassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [destinationIP, setDestinationIP] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [scheduleTime, setScheduleTime] = useState<Date | null>(null);
  const [recurring, setRecurring] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');
  const [activated, setActivated] = useState<string>('');

  const handleExecute = () => {
    console.log('Execute button clicked');
  };

  const handleFinish = () => {
    console.log('Finish button clicked');
  };

  const handleClose = () => {
    console.log('Close button clicked');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>TASK CREATION / EDIT</h1>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DatePicker
        label="Uncontrolled picker"
        defaultValue={dayjs('2022-04-17')}
        renderInput={(params: DatePickerProps['renderInput']) => <TextField {...params} />}
      /> */}
    </LocalizationProvider>
      <InputField 
        label="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <SelectField 
        label="Task Type" 
        value={taskType} 
        options={['Security Report', 'Other']} 
        onChange={(e) => setTaskType(e.target.value as string)} 
      />
      <SelectField 
        label="Security Report Type" 
        value={reportType} 
        options={['Access Logs', 'Error Logs']} 
        onChange={(e) => setReportType(e.target.value as string)} 
      />
      <CheckboxField 
        label="Password protect the report" 
        checked={passwordProtected} 
        onChange={(e) => setPasswordProtected(e.target.checked)} 
      />
      <InputField 
        label="File Password" 
        value={filePassword} 
        onChange={(e) => setFilePassword(e.target.value)} 
      />
      <InputField 
        label="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <InputField 
        label="Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <InputField 
        label="Destination IP" 
        value={destinationIP} 
        onChange={(e) => setDestinationIP(e.target.value)} 
      />
      <InputField 
        label="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
   
      <RadioButtonGroup 
        label="Recurring" 
        value={recurring} 
        options={['Yes', 'No']} 
        onChange={(e) => setRecurring(e.target.value as string)} 
      />
      <RadioButtonGroup 
        label="Frequency" 
        value={frequency} 
        options={['Daily', 'Weekly', 'Monthly']} 
        onChange={(e) => setFrequency(e.target.value as string)} 
      />
      <RadioButtonGroup 
        label="Activate/Deactivate" 
        value={activated} 
        options={['Activate Task', 'Deactivate Task']} 
        onChange={(e) => setActivated(e.target.value as string)} 
      />
      <ButtonGroup 
        onExecute={handleExecute} 
        onFinish={handleFinish} 
        onClose={handleClose} 
      />
    </div>
  );
};

export default App;
