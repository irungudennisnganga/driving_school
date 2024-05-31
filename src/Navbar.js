import {  Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-between">
          <li className="mr-6">
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/display" className="text-white hover:text-gray-400">Display Data</Link>
          </li>
        </ul>
      </nav>
    );
  }

  export default Navbar