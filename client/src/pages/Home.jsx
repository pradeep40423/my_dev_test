import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #f6f8fb 0%, #eef2f7 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Card elevation={2}>
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.2 }}>
                  MY DEV TEST
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mt: 0.5 }}>
                  Welcome
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  This workspace now uses a clean base layout with only core account pages.
                </Typography>
              </Box>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                {token ? (
                  <Button variant="contained" fullWidth onClick={() => navigate('/profile')}>
                    Open Dashboard
                  </Button>
                ) : (
                  <>
                    <Button variant="outlined" fullWidth onClick={() => navigate('/login')}>
                      Login
                    </Button>
                    <Button variant="contained" fullWidth onClick={() => navigate('/signup')}>
                      Sign Up
                    </Button>
                  </>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;
