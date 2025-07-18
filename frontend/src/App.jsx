import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import PersonaSelector from './components/PersonaSelector';
import JobInput from './components/JobInput';
import SubmitButton from './components/SubmitButton';
import ResultViewer from './components/ResultViewer';

function App() {
  return (
    <div className="container">
      <h1>Smart PDF Analyzer</h1>
      <FileUpload />
      <PersonaSelector />
      <JobInput />
      <SubmitButton />
      <ResultViewer />
    </div>
  );
}

export default App;
