import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider, useUser } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <UserProvider>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
    </UserProvider>
  );
}

function Home() {
  const { user, isAuthenticated } = useUser();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        {isAuthenticated ? (
          <>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>
              Welcome back, {user?.first_name}!
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '24px'
            }}>
              Ready to plan your next adventure?
            </p>
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '16px'
              }}>
                Your Profile
              </h3>
              <div style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <p><strong>Name:</strong> {user?.first_name} {user?.last_name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Role:</strong> {user?.role_id === 1 ? 'Admin' : 'User'}</p>
                <p><strong>User ID:</strong> {user?.user_id}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>
              Welcome to Vacation App
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '32px'
            }}>
              Plan your next adventure with us!
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link
                to="/register"
                style={{
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
              >
                Get Started
              </Link>
              <Link
                to="/login"
                style={{
                  backgroundColor: '#6b7280',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
              >
                Sign In
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;