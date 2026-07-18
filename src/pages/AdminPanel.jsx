import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AdminPanel = () => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={700}>Admin Panel</Typography>
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Administrative tools will appear here.
      </Typography>
    </Paper>
  );
};

export default AdminPanel;
