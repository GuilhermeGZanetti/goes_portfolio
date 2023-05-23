//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import PolicyPage from './pages/PrivacyPolicySFS';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy-sfs" element={<PolicyPage />} />
       </Routes>
    </>
  );
}

export default App;
