import { useState } from 'react'
import './App.css'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

function App() {
  const [htmlCode, setHtmlCode] = useState("")
  const [cssCode, setCssCode] = useState("")
  const [jsCode, setJsCode] = useState("")
  const handleClick = () =>{
    const iframe = document.getElementById('output')
    iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    iframe.contentWindow.eval(jsCode)
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="left-area">
          <label className='html'> <div className="buttons"><div className="red"></div> <div className="yellow"></div><div className="green"></div></div>  index.html <div className="empty"></div></label>
          <textarea className="code-area" onChange={(e)=>setHtmlCode(e.target.value)} ></textarea>
          <label className='html'> <div className="buttons"><div className="red"></div> <div className="yellow"></div><div className="green"></div></div>  styles.css <div className="empty"></div></label>
          <textarea className="code-area" onChange={(e)=>setCssCode(e.target.value)} ></textarea>
          <label className='html'> <div className="buttons"><div className="red"></div> <div className="yellow"></div><div className="green"></div></div>  main.js <div className="empty"></div></label>
          <textarea className="code-area" onChange={(e)=>setJsCode(e.target.value)} ></textarea>
        </div>
        <div className="right-area">
          <button onClick={handleClick}>Run</button>
          <iframe id='output'></iframe>
        </div>
      </div>
    </div>
  )
}

export default App
