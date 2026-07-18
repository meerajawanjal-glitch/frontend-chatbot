import React from 'react';
import { Paper } from '@mui/material';

const GlassCard = ({ children, sx = {}, ...props }) => (
  <Paper
    elevation={0}
    sx={{
      background: 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Paper>
);

export default GlassCard;
