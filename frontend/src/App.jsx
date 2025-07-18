// App.jsx
import './App.css';
import FileUpload from './components/FileUpload.jsx';
import PersonaSelector from './components/PersonaSelector.jsx';
import JobInput from './components/JobInput.jsx';
import SubmitButton from './components/SubmitButton.jsx';
import ResultViewer from './components/ResultViewer.jsx';
import HeadingSidebar from './components/HeadingSidebar.jsx';
import { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [files, setFiles] = useState([]);
  const [persona, setPersona] = useState('student');
  const [job, setJob] = useState('');
  const [results, setResults] = useState([]);
  const [outline, setOutline] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = async () => {
    if (!files.length || !job) {
      alert('Please upload PDFs and enter job');
      return;
    }

    const formData = new FormData();
    files.forEach(f => formData.append('pdfs', f));
    formData.append('persona', persona);
    formData.append('job', job);

    try {
      const res = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setResults(data.sections || []);
      setOutline(data.outline || []);
    } catch (e) {
      alert('Error reaching backend.');
      console.error(e);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Adobe Hackathon · Smart PDF Assistant</div>
      </nav>

      <header className="hero-with-lottie">
        <div className="hero-text">
          <h1>Empower Your Reading with AI</h1>
          <p>Understand PDFs better, faster — tailored to you.</p>
        </div>
        <div className="hero-animation">
          <Lottie
            loop
            play
            src="https://assets5.lottiefiles.com/packages/lf20_hy4txm7l.json"
            style={{ width: 300, height: 300 }}
          />
        </div>
      </header>

      <div className="layout">
        <div className="form-box">
          <h2>Upload & Personalize</h2>
          <FileUpload setFiles={setFiles} />
          <PersonaSelector persona={persona} setPersona={setPersona} />
          <JobInput job={job} setJob={setJob} />
          <SubmitButton onSubmit={handleSubmit} />
        </div>

        <div className="content-box">
          <HeadingSidebar outline={outline} />
          <ResultViewer results={results} />
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Adobe India Hackathon · Team CodeBrigade</p>
      </footer>
    </>
  );
}

export default App;
