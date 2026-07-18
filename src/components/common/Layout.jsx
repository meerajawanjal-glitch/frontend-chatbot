import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  Divider,
  Chip,
  Badge,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard,
  Chat,
  Feedback,
  Person,
  Settings,
  Logout,
  AdminPanelSettings,
  Notifications,
  ChevronLeft,
  DarkMode,
  LightMode,
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const drawerWidth = 280;

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Dashboard },
  { path: '/chat', label: 'Chat Support', icon: Chat },
  { path: '/complaints', label: 'Complaints', icon: Feedback },
  { path: '/profile', label: 'Profile', icon: Person },
];

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ color: '#1e293b' }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Device Care"
                sx={{ height: 32, width: 32 }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: '#1e293b',
                  fontWeight: 700,
                  letterSpacing: '-0.5px',
                }}
              >
                Device Care
              </Typography>
              <Chip
                label="Support"
                size="small"
                sx={{
                  backgroundColor: '#dbeafe',
                  color: '#2563eb',
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  height: 20,
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Notifications">
              <IconButton sx={{ color: '#475569' }}>
                <Badge badgeContent={3} color="primary">
                  <Notifications />
                </Badge>
              </IconButton>
            </Tooltip>

            <IconButton
              onClick={handleMenuOpen}
              sx={{
                padding: 0.5,
                border: '2px solid #e2e8f0',
                '&:hover': { borderColor: '#2563eb' },
              }}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#2563eb',
                  fontSize: '0.9rem',
                }}
              >
                {user?.full_name?.charAt(0) || 'U'}
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1,
                  minWidth: 200,
                  borderRadius: 2,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Box sx={{ px: 2, py: 1.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {user?.full_name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                  {user?.email}
                </Typography>
              </Box>
              <Divider />
              <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>
                <ListItemIcon><Person fontSize="small" /></ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </MenuItem>
              {user?.role === 'admin' && (
                <MenuItem onClick={() => { handleMenuClose(); navigate('/admin'); }}>
                  <ListItemIcon><AdminPanelSettings fontSize="small" /></ListItemIcon>
                  <ListItemText>Admin Panel</ListItemText>
                </MenuItem>
              )}
              <MenuItem onClick={() => { handleMenuClose(); navigate('/settings'); }}>
                <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout} sx={{ color: '#ef4444' }}>
                <ListItemIcon><Logout fontSize="small" sx={{ color: '#ef4444' }} /></ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid #e2e8f0',
            backgroundColor: '#ffffff',
            paddingTop: '64px',
            ...(drawerOpen ? {} : {
              width: 0,
              overflow: 'hidden',
            }),
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: 1, py: 2 }}>
            <List>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton
                      onClick={() => handleNavigate(item.path)}
                      sx={{
                        mx: 1,
                        borderRadius: 2,
                        backgroundColor: isActive ? '#eff6ff' : 'transparent',
                        '&:hover': {
                          backgroundColor: isActive ? '#dbeafe' : '#f1f5f9',
                        },
                      }}
                    >
                      <MuiListItemIcon
                        sx={{
                          minWidth: 40,
                          color: isActive ? '#2563eb' : '#64748b',
                        }}
                      >
                        <item.icon />
                      </MuiListItemIcon>
                      <MuiListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? '#2563eb' : '#1e293b',
                        }}
                      />
                      {isActive && (
                        <Box
                          sx={{
                            width: 4,
                            height: 24,
                            backgroundColor: '#2563eb',
                            borderRadius: 2,
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box sx={{ p: 2, borderTop: '1px solid #e2e8f0' }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              }}
            >
              <Typography variant="caption" sx={{ color: '#2563eb', fontWeight: 600 }}>
                Need Help?
              </Typography>
              <Typography variant="body2" sx={{ color: '#1e293b', mt: 0.5, fontSize: '0.85rem' }}>
                Contact our support team 24/7
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '64px',
          ml: drawerOpen ? 0 : 0,
          transition: 'all 0.3s',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#f8fafc',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Layout;