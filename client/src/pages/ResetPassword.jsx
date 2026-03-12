import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '../components/ToastProvider';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const validateEmail = (value) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    setError(validationError);
    setNewPassword('');

    if (validationError) {
      showToast('Please enter a valid email address.', 'warning');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/reset-password', {
        email,
      });

      const generatedPassword = response.data.newPassword || response.data.password || '';
      setNewPassword(generatedPassword);

      if (!generatedPassword) {
        showToast('Password was reset, but no generated password was returned.', 'warning');
        return;
      }

      showToast('Password regenerated successfully.', 'success');
    } catch (requestError) {
      showToast(
        requestError.response?.data?.message || 'Reset password failed. Please try again.',
        'error',
      );
      setNewPassword('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
        <Stack spacing={2.5}>
          <Box>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
              Reset Password
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Enter your account email to generate a fresh password.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              error={!!error}
              helperText={error}
              placeholder="you@example.com"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate New Password'}
            </Button>
          </form>

          {newPassword && (
            <Alert severity="success">
              New password: <strong>{newPassword}</strong>
            </Alert>
          )}

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Link component={RouterLink} to="/login">
              Back to Login
            </Link>
            <Button size="small" onClick={() => navigate('/signup')}>
              Create Account
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
