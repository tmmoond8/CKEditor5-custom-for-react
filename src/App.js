import React, { useState } from 'react';
import './App.css';
import CKEditor5 from './CKEditor5';

function App() {
  const [ contents, setContents ] = useState('');
  
  return (
    <div className="App">
      <CKEditor5 onChange={setContents}/>
      <pre style={{ whiteSpace: 'normal'}}>
        {contents}
      </pre>
    </div>
  );
}

export default App;
