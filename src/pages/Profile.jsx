import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Profile
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography color="text.secondary">
          Profile settings will be shown here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Profile;
