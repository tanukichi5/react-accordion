import React, {createContext, useState} from 'react'

import logo from './logo.svg';
import './App.css';

import Accordion from './components/Accordion';
import AccordionItem from './components/AccordionItem';
import AccordionPanel from './components/AccordionPanel';

import Provider from './components/contextSample/Context'
import ContextA from './components/contextSample/ContextA'
import ContextC from './components/contextSample/ContextC'




function App() {


  return (
    <div className="App">

      <Provider>
        <ContextA>
          <ContextC/>
        </ContextA>
      </Provider>

      
      <Accordion>

        <AccordionItem>
          <div>
            <button>トリガー</button>
          </div>
          <AccordionPanel>
            <p>アコーディオンの内容</p>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
