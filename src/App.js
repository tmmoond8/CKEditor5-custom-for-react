import React, { useState } from 'react';
import './App.css';
import CKEditor from './CKEditor';

function App() {
  const [ contents, setContents ] = useState('');
  
  return (
    <div className="App">
      <CKEditor onChange={setContents}/>
      <pre style={{ whiteSpace: 'normal'}}>
        {contents}
      </pre>
    </div>
  );
}

export default App;
