import React, {createContext, useState} from 'react'

import logo from './logo.svg';
import './App.css';

import Accordion from './components/Accordion';
import AccordionItem from './components/AccordionItem';
import AccordionTrigger from './components/AccordionTrigger';
import AccordionPanel from './components/AccordionPanel';

import ContextA from './components/contextSample/ContextA'
import ContextC from './components/contextSample/ContextC'




function App() {

  function open() {
    console.log('開いた')
  }
  function close() {
    console.log('閉じた')
  }

  const pokemon_1 = [
    {
      title: 'フシギダネ',
      detail: 'うまれたときから せなかに しょくぶつの タネが あって すこしずつ おおきく そだつ。'
    },
    {
      title: 'ヒトカゲ',
      detail: 'うまれたときから しっぽに ほのおが ともっている。ほのおが きえたとき その いのちは おわって しまう。'
    },
    {
      title: 'ゼニガメ',
      detail: `<b>ながい</b> くびを こうらのなかに ひっこめるとき いきおいよく みずでっぽうを はっしゃする。`
    }
  ]

  const pokemon_2 = [
    {
      title: 'チコリータ',
      detail: 'うまれたときから せなかに しょくぶつの タネが あって すこしずつ おおきく そだつ。'
    },
    {
      title: 'ヒノアラシ',
      detail: 'うまれたときから しっぽに ほのおが ともっている。ほのおが きえたとき その いのちは おわって しまう。'
    },
    {
      title: 'ワニノコ',
      detail: `<b>ながい</b> くびを こうらのなかに ひっこめるとき いきおいよく みずでっぽうを はっしゃする。`
    }
  ]


  return (
    <div className="App">

      {/* <ContextA>
        <ContextC/>
      </ContextA> */}


      
      <Accordion defaultExpandedPanels={[0]} multipleExpanded={true} content={pokemon_1} onOpen={open} onClose={close}>

        {/* <AccordionItem>
          <div className="AccordionItem__header">
            <AccordionTrigger>
              フシギダネ
            </AccordionTrigger>
          </div>
          <AccordionPanel>
            <div className="AccordionPanel__content">
              うまれたときから せなかに しょくぶつの タネが あって すこしずつ おおきく そだつ。
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <div className="AccordionItem__header">
            <AccordionTrigger>
              ヒトカゲ
            </AccordionTrigger>
          </div>
          <AccordionPanel>
            <div className="AccordionPanel__content">
              うまれたときから しっぽに ほのおが ともっている。ほのおが きえたとき その いのちは おわって しまう。
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <div className="AccordionItem__header">
            <AccordionTrigger>
              ゼニガメ
            </AccordionTrigger>
          </div>
          <AccordionPanel>
            <div className="AccordionPanel__content">
              ながい くびを こうらのなかに ひっこめるとき いきおいよく みずでっぽうを はっしゃする。
            </div>
          </AccordionPanel>
        </AccordionItem> */}

      </Accordion>

      <Accordion defaultExpandedPanels={[0]} multipleExpanded={false} content={pokemon_2} onOpen={open} onClose={close} />

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
