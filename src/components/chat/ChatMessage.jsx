import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatMessage = ({ message, isUser = false }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', mb: 1 }}>
      <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: isUser ? '#2563eb' : '#e2e8f0', color: isUser ? '#fff' : '#0f172a' }}>
        <Typography variant="body2">{message}</Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;
