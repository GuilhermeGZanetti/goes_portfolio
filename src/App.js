//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import PolicyPage from './pages/PrivacyPolicy';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
       </Routes>
    </>
  );
}

export default App;
