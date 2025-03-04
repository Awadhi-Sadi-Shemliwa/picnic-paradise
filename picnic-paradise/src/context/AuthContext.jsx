import React, { createContext, useContext, useState, useEffect } from 'react';
import { currentUser, hostUser } from '../data/mockData';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    // Check for saved auth state
    const savedUser = localStorage.getItem('user');
    const savedUserType = localStorage.getItem('userType');
    
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setIsHost(savedUserType === 'host');
    }
  }, []);

  const login = async (email, password) => {
    // Mock login - in a real app, this would call an API
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // For demo purposes, we'll use the mock data
      if (email === currentUser.email) {
        setUser(currentUser);
        setIsAuthenticated(true);
        setIsHost(false);
        localStorage.setItem('user', JSON.stringify(currentUser));
        localStorage.setItem('userType', 'user');
      } else if (email === hostUser.email) {
        setUser(hostUser);
        setIsAuthenticated(true);
        setIsHost(true);
        localStorage.setItem('user', JSON.stringify(hostUser));
        localStorage.setItem('userType', 'host');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsHost(false);
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
  };

  const register = async (name, email, password) => {
    // Mock registration - in a real app, this would call an API
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Create a new user
      const newUser = {
        id: `u${Date.now()}`,
        name,
        email,
        profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
        bookings: [],
        savedEvents: [],
        preferences: {
          categories: [],
          locations: [],
          priceRange: [0, 500],
        },
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      setIsHost(false);
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('userType', 'user');
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isHost,
      login, 
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};