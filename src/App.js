import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InitialPage from './components/section1/InitialPage';
import TablaInfo from './components/section2/TablaInfo'

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <InitialPage />        
      </header>
      <TablaInfo /> 
    </div>
  );
}

export default App;
