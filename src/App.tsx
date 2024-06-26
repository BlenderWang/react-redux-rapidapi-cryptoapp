import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails } from './components'

import './App.css';

function App() {
  return (
      <div className='app'>
        <nav className="navbar">
          <Navbar />
        </nav>

        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>

          <footer className='footer'>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
              <Link to="/">
                Crypto App Inc.
              </Link> <br />
              All Rights Reserved.
            </Typography.Title>

            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </footer>

        </div>
      </div>
  );
}

export default App;
