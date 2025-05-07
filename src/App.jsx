import React from 'react';
import Home from './Pages/Home.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import NoteSearchPage from './Pages/NoteSearchPage.jsx';
function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={ <Home/>}/>
  <Route path='/note' element={ <NoteSearchPage/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;