import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { Layout } from 'antd';

// internal imports
import { Dashboard, Explore, MyPlants, WateringLog, Custom404 } from './pages/index.jsx'
import SearchResults from './pages/SearchResults.jsx'
import './App.css'
import CustomNavBar from './components/CustomNavbar/index.jsx'
import CustomHeader from './components/CustomHeader'
import CustomFooter from './components/CustomFooter/index.jsx'
import { ToDoProvider } from './contexts/ContextsToDos';
import { LocationProvider } from './contexts/ContextLocation'
import { MyPlantsContext } from './contexts/ContextMyPlants';
import { MyPlantsProvider } from './contexts/ContextMyPlants';
import { PlantProvider } from './contexts/PlantContext.jsx';
import { SearchResultsProvider } from './contexts/ContextSearchRes.jsx';


function App() {

  // const [collapsed, setCollapsed] = useState(false); 

  // Import Layout components here
  const { Content, Sider } = Layout;

  return (

    <>
      {/* <Router basename={'/'}> */}
      {/* The whole app must be wrapped in the ToDoProvider so that the Watering Log page can access it */}
      <SearchResultsProvider>

        <ToDoProvider>
          <MyPlantsProvider>
            <LocationProvider>
              <Layout style={{ minHeight: '100vh' }}>
                <Layout style={{ minHeight: '100vh' }}>
                  <Sider 
                  collapsible
                  style={{ backgroundColor: '#FEFEFE' }}>
                    <CustomNavBar />
                  </Sider>
                  <Layout>
                    <CustomHeader />
                    <Content>
                      <Routes>
                        <Route path='' element={< Dashboard />} />
                        <Route path='/dashboard' element={< Dashboard />} />
                        <Route path='/explore' element={< Explore />} />
                        <Route path='/my-plants' element={< MyPlants />} />
                        <Route path='/watering-log' element={< WateringLog />} />
                        <Route path='/search-results' element={< SearchResults />} />
                        <Route path='/404' element={< Custom404 />} />
                      </Routes>
                    </Content>
                    <CustomFooter />
                  </Layout>
                </Layout>
              </Layout>
            </LocationProvider>
          </MyPlantsProvider>
        </ ToDoProvider>
      </SearchResultsProvider>
      {/* </Router> */}
    </>
  )
}

export default App