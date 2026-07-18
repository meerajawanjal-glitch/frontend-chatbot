import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('support-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to restore auth state:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    if (!email || !password) {
      return { success: false, error: 'Email and password are required.' };
    }

    const storedUsers = JSON.parse(localStorage.getItem('support-users') || '[]');
    const existingUser = storedUsers.find((item) => item.email === email);

    const userData = {
      id: existingUser?.id || Date.now(),
      email,
      full_name: existingUser?.full_name || email.split('@')[0],
      role: email.includes('admin') ? 'admin' : 'user',
    };

    if (!existingUser) {
      storedUsers.push({ id: userData.id, email, full_name: userData.full_name, password });
      localStorage.setItem('support-users', JSON.stringify(storedUsers));
    }

    localStorage.setItem('support-user', JSON.stringify(userData));
    setUser(userData);
    return { success: true, user: userData };
  };

  const register = async (formData) => {
    const { email, password, full_name, username } = formData;

    if (!email || !password || !full_name || !username) {
      return { success: false, error: 'Please complete all fields.' };
    }

    const storedUsers = JSON.parse(localStorage.getItem('support-users') || '[]');
    const exists = storedUsers.some((item) => item.email === email);

    if (exists) {
      return { success: false, error: 'An account with that email already exists.' };
    }

    const userData = {
      id: Date.now(),
      email,
      full_name,
      username,
      role: email.includes('admin') ? 'admin' : 'user',
    };

    storedUsers.push({ ...userData, password });
    localStorage.setItem('support-users', JSON.stringify(storedUsers));
    localStorage.setItem('support-user', JSON.stringify(userData));
    setUser(userData);
    return { success: true, user: userData };
  };

  const logout = () => {
    localStorage.removeItem('support-user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
