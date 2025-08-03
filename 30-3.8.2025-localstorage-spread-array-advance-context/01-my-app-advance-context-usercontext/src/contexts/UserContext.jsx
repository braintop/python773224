import React, { createContext, useContext, useState, useEffect } from 'react';


// phase 1 - Create the context
const UserContext = createContext();


// phase 2 - Custom hook to use the UserContext
export const useUser = () => {
   const context = useContext(UserContext);
   if (!context) {
       throw new Error('useUser must be used within a UserProvider');
   }
   return context;
};


// phase 3 - UserProvider component
export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [loading, setLoading] = useState(true);


   // Check if user is already logged in (e.g., from localStorage)
   useEffect(() => {
       const savedUser = localStorage.getItem('user');
      
       if (savedUser) {
           try {
               const userData = JSON.parse(savedUser);
               setUser(userData);
               setIsAuthenticated(true);
           } catch (error) {
               console.error('Error parsing saved user data:', error);
               localStorage.removeItem('user');
           }
       }
       setLoading(false);
   }, []);


   // Login function (without token support)
   const login = (userData) => {
       setUser(userData);
       setIsAuthenticated(true);
      
       // Save to localStorage for persistence
       localStorage.setItem('user', JSON.stringify(userData));
   };


   // Logout function
   const logout = () => {
       setUser(null);
       setIsAuthenticated(false);
      
       // Clear localStorage
       localStorage.removeItem('user');
   };


   // Update user data
   const updateUser = (newUserData) => {
       const updatedUser = { ...user, ...newUserData };
       setUser(updatedUser);
       localStorage.setItem('user', JSON.stringify(updatedUser));
   };


   // Get user data from localStorage
   function  getUserData () {
       const savedUser = localStorage.getItem('user');
       if (savedUser) {
           try {
               return JSON.parse(savedUser);
           } catch (error) {
               console.error('Error parsing user data:', error);
               return null;
           }
       }
       return null;
   };


   // Check if user has specific role
   const hasRole = (roleId) => {
       return user && user.role_id === roleId;
   };


   // Check if user is admin
   const isAdmin = () => {
       return hasRole(1); // Assuming role_id 1 is admin
   };


   // Context value
   const value = {
       user,
       isAuthenticated,
       loading,
       login,
       logout,
       updateUser,
       getUserData,
       hasRole,
       isAdmin
   };


   return (
       <UserContext.Provider value={value}>
           {children}
       </UserContext.Provider>
   );
};


export default UserContext;
