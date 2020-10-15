import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaInfo from './components/section2/TablaInfo';
import TablaInfo2 from './components/section2/TablaInfo2'
import Formulario from './components/section1/Formulario'
import ContainerGeneral from './components/section1/ContainerGeneral';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <ContainerGeneral />     
      </header>
      <Formulario />  
      <TablaInfo /> 
      <TablaInfo2 /> 
    </div>
  );
}

export default App;
