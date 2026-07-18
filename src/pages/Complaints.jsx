import React from 'react';
import { Box, Paper, Typography, Stack, Chip } from '@mui/material';

const Complaints = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Complaints
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip label="Open" color="warning" />
          <Chip label="In Progress" color="info" />
          <Chip label="Resolved" color="success" />
        </Stack>
        <Typography color="text.secondary">
          Complaint management view is ready for integration.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Complaints;
