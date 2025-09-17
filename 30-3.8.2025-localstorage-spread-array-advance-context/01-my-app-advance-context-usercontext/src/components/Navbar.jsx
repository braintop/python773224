import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

export default function Navbar() {
    const { user, isAuthenticated, logout } = useUser();

    const handleLogout = () => {
        logout();
    };
    return (
        <nav style={{
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderBottom: '1px solid #e5e5e5'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px'
            }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#333',
                        margin: 0
                    }}>
                        Vacation App
                    </h1>
                </Link>
                
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <Link
                        to="/"
                        style={{
                            color: '#666',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            transition: 'color 0.2s'
                        }}
                    >
                        Home
                    </Link>
                    
                    {isAuthenticated ? (
                        // Show when user is logged in
                        <>
                            <span style={{
                                color: '#666',
                                fontSize: '14px'
                            }}>
                                Welcome, {user?.first_name} {user?.last_name}
                                {user?.role_id === 1 && (
                                    <span style={{
                                        marginLeft: '8px',
                                        backgroundColor: '#fee2e2',
                                        color: '#dc2626',
                                        fontSize: '12px',
                                        padding: '2px 8px',
                                        borderRadius: '12px',
                                        fontWeight: '500'
                                    }}>
                                        Admin
                                    </span>
                                )}
                            </span>
                            <button
                                onClick={handleLogout}
                                style={{
                                    backgroundColor: '#dc2626',
                                    color: 'white',
                                    padding: '8px 16px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s'
                                }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        // Show when user is not logged in
                        <>
                            <Link
                                to="/login"
                                style={{
                                    color: '#666',
                                    textDecoration: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    transition: 'color 0.2s'
                                }}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                style={{
                                    backgroundColor: '#4f46e5',
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    transition: 'background-color 0.2s'
                                }}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}