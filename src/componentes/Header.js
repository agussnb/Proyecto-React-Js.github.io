import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setShowHeader(location.pathname === '/');
  }, [location]);

  return (
    showHeader &&(  <header>
      <h1 className='h1Header'>Catalogo de nuestros productos</h1>
    </header>)
  )
}

export default Header