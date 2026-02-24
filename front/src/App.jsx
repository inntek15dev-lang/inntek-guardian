import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Controls from './pages/Controls';
import Audits from './pages/Audits';
import NonConformities from './pages/NonConformities';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/docs" element={<Documents />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/nc" element={<NonConformities />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
