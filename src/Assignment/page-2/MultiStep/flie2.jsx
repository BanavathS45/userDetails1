import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
return (
<Box component="form" sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="UserName" variant="outlined" />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField id="outlined-basic" label="Password" variant="outlined" />

</Box>
);
}