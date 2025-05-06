import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content should grow to fill space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer sticks to bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
