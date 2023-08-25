import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import CreateUserProfile from './components/CreateUserProfile/CreateUserProfile';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path = "/create-profile" element={<CreateUserProfile/>}/>
        <Route path=  "/profile/:id" element={<UserProfilePage/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
