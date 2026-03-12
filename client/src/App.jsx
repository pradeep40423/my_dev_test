import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ToastProvider, useToast } from './components/ToastProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import WarehouseManufacturing from './pages/solutions/WarehouseManufacturing';
import SpidexPlatform from './pages/solutions/SpidexPlatform';
import AgileErp from './pages/solutions/AgileErp';
import SapConsulting from './pages/services/SapConsulting';
import EcommerceDevelopment from './pages/services/EcommerceDevelopment';
import StrategicResourcing from './pages/services/StrategicResourcing';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const { showToast } = useToast();

  useEffect(() => {
    if (!token) {
      showToast('Please log in to continue.', 'warning');
    }
  }, [showToast, token]);

  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions/warehouse-manufacturing" element={<WarehouseManufacturing />} />
            <Route path="/solutions/spidex-platform" element={<SpidexPlatform />} />
            <Route path="/solutions/agile-erp" element={<AgileErp />} />
            <Route path="/services/sap-consulting" element={<SapConsulting />} />
            <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
            <Route path="/services/strategic-resourcing" element={<StrategicResourcing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/dashboard" element={<Navigate to="/profile" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App
