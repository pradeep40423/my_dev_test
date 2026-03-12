import { Box, Button, Card, CardContent, Container, Divider, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/ToastProvider';

const Dashboard = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem('token');
    showToast('You have been logged out.', 'info');
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(180deg, #f6f8fb 0%, #eef2f7 100%)',
      }}
    >
      <Container maxWidth="md">
        <Card elevation={2}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.2 }}>
                  ACCOUNT
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mt: 0.5 }}>
                  Dashboard
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  You are signed in. Use the actions below to continue working.
                </Typography>
              </Box>

              <Divider />

              <Stack spacing={1.2}>
                <Typography variant="subtitle2" color="text.secondary">
                  Session Status
                </Typography>
                <Typography variant="body1">Active and authenticated</Typography>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button variant="outlined" onClick={() => navigate('/')}>
                  Back to Home
                </Button>
                <Button variant="contained" color="error" onClick={handleLogout}>
                  Logout
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Dashboard;
