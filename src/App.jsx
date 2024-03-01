import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import { Layout } from 'antd';
import { Dashboard, Explore, MyPlants, WateringLog, Custom404 } from './Pages'
import SearchResults from "../src/Pages/SearchResults"
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [collapsed, setCollapsed] = useState(false); 

  // Import Layout components here
const { Header, Content, Footer, Sider } = Layout;

  return (
    <>
      <Router basename={'/'}>

      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>
        </Sider>

        <Layout>
          <Header />

          <Content style={{ margin: '16px', padding: 24, background: '#fff', minHeight: 360 }}>
            <Routes>
              <Route path='' element={< Dashboard />} />
              <Route path='/dashboard' element={< Dashboard />} />
              <Route path='/explore' element={< Explore />} />
              <Route path='/my-plants' element={< MyPlants />} />
              <Route path='/watering-log' element={< WateringLog />} />
              <Route path='/search-results' element={< SearchResults/>} />
              <Route path='/404' element={< Custom404 />} />
            </Routes>
          </Content>

          <Footer />
        </Layout>
      </Layout>
    </Router>
    
    </>
  )
}

export default App