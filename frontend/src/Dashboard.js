// src/components/Dashboard.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { ExitToApp, Dashboard as DashboardIcon, Notifications, RecentActors } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored authentication tokens or user data here
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <DashboardIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>
          <Button color="inherit" startIcon={<ExitToApp />} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 15, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Welcome Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: '#ffffff',
              }}
            >
              <Avatar sx={{ bgcolor: '#1976d2', width: 56, height: 56, mb: 2 }}>
                <DashboardIcon fontSize="large" />
              </Avatar>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="div" gutterBottom>
                  Welcome to the Dashboard!
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  You have successfully logged in.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Activities Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                minHeight: 200,
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: '#ffffff',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <RecentActors sx={{ mr: 1, color: '#1976d2' }} />
                  <Typography variant="h6" component="div">
                    Recent Activities
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  No recent activities found. Start using the application to see updates here.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Notifications Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                minHeight: 200,
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: '#ffffff',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Notifications sx={{ mr: 1, color: '#1976d2' }} />
                  <Typography variant="h6" component="div">
                    Notifications
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  You have no new notifications at the moment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Additional Cards/Sections */}
          {/* You can add more cards or sections here following the same structure */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
