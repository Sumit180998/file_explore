import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { initialFileSystem } from './data';
import FileExplorer from './components/FileExplorer';
import { FileExplorerProvider } from './FileExplorerContext';

function App() {
  const[data,setData]=useState(initialFileSystem)
  return (
    <FileExplorerProvider>
    <div style={{padding:20}}>
      <h1>File Explorer</h1>
      {/* <FileExplorer data={data} setData={setData}/> */}
      <FileExplorer/>
       
    </div>
    </FileExplorerProvider>
  );
}

export default App;
