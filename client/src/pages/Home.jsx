import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Divider,
} from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MemoryIcon from '@mui/icons-material/Memory';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const solutions = [
    {
      icon: <PrecisionManufacturingIcon color="primary" fontSize="large" />,
      title: 'IoT Warehouse & Manufacturing',
      description: 'Intelligent tracking, sensor-enabled workflows, and real-time manufacturing visibility.',
      path: '/solutions/warehouse-manufacturing',
    },
    {
      icon: <CloudQueueIcon color="primary" fontSize="large" />,
      title: 'SPIDEX IoT Platform',
      description: 'Connect devices to cloud systems with secure APIs and production-ready management features.',
      path: '/solutions/spidex-platform',
    },
    {
      icon: <StorefrontIcon color="primary" fontSize="large" />,
      title: 'Agile ERP Ordering',
      description: 'Lightweight order management with stock visibility, notifications, and faster fulfillment.',
      path: '/solutions/agile-erp',
    },
  ];

  const services = [
    {
      icon: <BusinessCenterIcon color="secondary" fontSize="large" />,
      title: 'SAP Industry 4.0 Consulting',
      description: 'Advisory and implementation support for transformation programs and enterprise modernization.',
      path: '/services/sap-consulting',
    },
    {
      icon: <StorefrontIcon color="secondary" fontSize="large" />,
      title: 'E-Commerce Development',
      description: 'Scalable B2B/B2C commerce experiences integrated with ERP and operational systems.',
      path: '/services/ecommerce-development',
    },
    {
      icon: <HandshakeIcon color="secondary" fontSize="large" />,
      title: 'Strategic Resourcing',
      description: 'On-demand access to experienced SAP and product engineering professionals.',
      path: '/services/strategic-resourcing',
    },
  ];

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
              <Button color="inherit" onClick={() => {
                const section = document.getElementById('company-section');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Company
              </Button>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              {token ? (
                <>
                  <Button variant="contained" onClick={() => navigate('/profile')}>
                    Profile
                  </Button>
                </>
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

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                Where AI Meets the Factory Floor
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Build modern industrial platforms with IoT, enterprise expertise, and AI-powered intelligence.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" size="large" onClick={() => navigate('/signup')}>
                  Get Started
                </Button>
                <Button variant="outlined" size="large" onClick={() => navigate('/login')}>
                  Explore Platform
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card elevation={2}>
                <CardContent>
                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <MemoryIcon color="primary" />
                      <Typography variant="body1">BLE Edge Tracking</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <AutoAwesomeIcon color="primary" />
                      <Typography variant="body1">Gen AI Integration</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CloudQueueIcon color="primary" />
                      <Typography variant="body1">Secure IoT Platform</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Our Solutions
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Productized innovation for industrial operations and device-centric platforms.
        </Typography>
        <Grid container spacing={3}>
          {solutions.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Stack spacing={1.5}>
                    {item.icon}
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                    <Button variant="text" sx={{ p: 0, alignSelf: 'flex-start' }} onClick={() => navigate(item.path)}>
                      Learn More
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Professional Services
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            High-impact consulting and engineering delivery for enterprise teams.
          </Typography>
          <Grid container spacing={3}>
            {services.map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.5}>
                      {item.icon}
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">{item.description}</Typography>
                      <Button variant="text" sx={{ p: 0, alignSelf: 'flex-start' }} onClick={() => navigate(item.path)}>
                        Learn More
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container id="company-section" maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Where Legacy Meets Innovation
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Built on deep SAP leadership and modern product engineering, this platform is designed to bridge enterprise systems with IoT and AI capabilities.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button variant="contained" onClick={() => navigate('/signup')}>
            Build With Us
          </Button>
          <Button variant="outlined" onClick={() => navigate(token ? '/profile' : '/login')}>
            Open Profile
          </Button>
        </Stack>
      </Container>

      <Divider />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="body2" color="text.secondary">
          © 2026 OpenSpace Innovates. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
