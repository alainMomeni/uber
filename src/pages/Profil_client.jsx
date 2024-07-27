import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ProfilSection1 from './Profil_section1';
import Header from './header/Header';
import axios from 'axios';

function ProfilClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/');
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className='min-h-screen'>
      <div>
        <Header />
      </div>
      <div>
        <ProfilSection1 />
      </div>
      <div className='sticky top-[100vh]'>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilClient;



