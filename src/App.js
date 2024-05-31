import './App.css';
import {  Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import Display from './Display';
import Navbar from './Navbar';

function App() {
  return (
   
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ContactForm />} />
          <Route path="/display" element={<Display />}  />
        </Routes>
      </div>
    
  );
}

export default App;