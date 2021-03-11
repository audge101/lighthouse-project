import React from 'react';
import Layout from './hoc/Layout/Layout';
import LighthouseContainer from './containers/LighthouseContainer/LighthouseContainer';
import { BrowserRouter }from 'react-router-dom';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <LighthouseContainer />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
