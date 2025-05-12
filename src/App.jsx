import React from 'react';
import Home from './Pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoteSearchPage from './Pages/NoteSearchPage.jsx';
import AuthForm from './Components/CreateAccount.jsx';
import { Login } from './Components/Login.jsx';
import AllNotes from './Components/NotePageComponents/AllNotes.jsx';
import Mainpage from './Pages/Mainpage.jsx';
function App() {
  return (<>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/note' element={<NoteSearchPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createAccount' element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
    <AllNotes /> */}
    <Mainpage />
    {/* Implement page 1
    */}
  </>
  );
}

export default App;