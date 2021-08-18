import React,{useState} from 'react';
import './App.scss';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import Operator from './components/Operator'


function App() {

  


  return (
    <div className="container">
      <div className="calculator">
        <Input  />
        <div className="row">
          <Operator />
          <Button  />
        </div>
        <ClearButton />
      </div>
    </div>
  );
}

export default App;
