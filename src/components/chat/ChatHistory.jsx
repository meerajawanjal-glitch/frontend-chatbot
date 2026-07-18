import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ChatHistory = () => {
  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="subtitle1" fontWeight={600}>Conversation</Typography>
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Recent support messages will appear here.
      </Typography>
    </Paper>
  );
};

export default ChatHistory;
