import { Container, Paper, Typography, Button, Box } from '@mui/material';
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
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Profile
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          You are logged in. Manage your account session from here.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="outlined" onClick={() => navigate('/')}>
            Back to Home
          </Button>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;
