import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';

const ChatInput = () => {
  const [value, setValue] = useState('');

  return (
    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
      <TextField
        fullWidth
        placeholder="Type a message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton color="primary" aria-label="send">
        <Send />
      </IconButton>
    </Box>
  );
};

export default ChatInput;
