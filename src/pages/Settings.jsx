import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const Settings = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Settings
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography color="text.secondary">
          Application settings will be shown here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Settings;
