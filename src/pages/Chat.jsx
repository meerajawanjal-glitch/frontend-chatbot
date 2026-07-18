import React from 'react';
import { Box, Paper, Typography, Stack, Chip } from '@mui/material';

const Chat = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Chat Support
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip label="Online" color="success" />
          <Chip label="AI Assistant" color="primary" />
        </Stack>
        <Typography color="text.secondary">
          The support chat experience is ready for the next integration step.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Chat;
