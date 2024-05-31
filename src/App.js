import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import Display from './Display';
import Navbar from './Navbar';
// import EditDataPage from './EditDataPage'; // Import the EditDataPage component
import UnderConstruction from './UnderConstruction';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ContactForm />} />
        <Route path="/display" element={<Display />} />
        {/* Define route for the EditDataPage component */}
        <Route path="/edit" element={<UnderConstruction />} />
      </Routes>
    </div>
  );
}

export default App;
