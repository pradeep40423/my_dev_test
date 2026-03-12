import { AppBar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DetailLayout = ({ category, title, subtitle, highlights, outcomes }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  return (
    <Box>
      <AppBar position="static" elevation={0} color="inherit">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
              OpenSpace Innovates
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <Button color="inherit" onClick={() => navigate('/solutions/warehouse-manufacturing')}>
                Solutions
              </Button>
              <Button color="inherit" onClick={() => navigate('/services/sap-consulting')}>
                Services
              </Button>
              <Button color="inherit" onClick={() => navigate('/')}>
                Company
              </Button>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              {token ? (
                <Button variant="contained" onClick={() => navigate('/profile')}>
                  Profile
                </Button>
              ) : (
                <>
                  <Button variant="outlined" onClick={() => navigate('/login')}>
                    Login
                  </Button>
                  <Button variant="contained" onClick={() => navigate('/signup')}>
                    Sign Up
                  </Button>
                </>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
            {category}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mb: 4 }}>
            {subtitle}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" onClick={() => navigate('/signup')}>
              Get Started
            </Button>
            <Button variant="outlined" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 7 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          Key Capabilities
        </Typography>
        <Grid container spacing={3}>
          {highlights.map((point) => (
            <Grid item xs={12} md={4} key={point.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>
                    {point.title}
                  </Typography>
                  <Typography color="text.secondary">{point.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ py: 7, bgcolor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Outcomes
          </Typography>
          <Grid container spacing={3}>
            {outcomes.map((item) => (
              <Grid item xs={12} md={4} key={item.label}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                      {item.value}
                    </Typography>
                    <Typography color="text.secondary">{item.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="body2" color="text.secondary">
          © 2026 OpenSpace Innovates. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default DetailLayout;
