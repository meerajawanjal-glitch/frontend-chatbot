import React from 'react';
import { Box, Grid, Paper, Typography, Stack } from '@mui/material';
import { Dashboard as DashboardIcon, Chat, Feedback } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <DashboardIcon color="primary" />
              <Typography fontWeight={600}>Overview</Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Monitor support activity and customer issues.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Chat color="primary" />
              <Typography fontWeight={600}>Live Chat</Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Review current conversations and responses.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Feedback color="primary" />
              <Typography fontWeight={600}>Complaints</Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Track unresolved customer complaints quickly.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
