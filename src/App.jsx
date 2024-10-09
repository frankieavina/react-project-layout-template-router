/* eslint-disable max-len */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurHistory from './components/OurHistory';
import OurStaff from './components/OurStaff';
import Treasure from './components/Treasure';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  // # The React Router <Routes> component looks through its children <Route>s using "automatic route ranking" and renders the route that best matches the requested URL pattern.
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* this is the default component  */}
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />}>
          <Route path="history" element={<OurHistory />} />
          <Route path="staff" element={<OurStaff />} />
          <Route path="treasure" element={<Treasure />} />
        </Route>
        <Route path="services" element={<Services />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
