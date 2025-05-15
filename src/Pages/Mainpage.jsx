import React from 'react'
// import AiAssistant from '../Components/MainPageCom/AiAssistant'

// import BrainPower from '../Components/MainPageCom/BrainPower'
// import Meeting from '../Components/MainPageCom/Meeting'

import NotesIdea from '../Components/MainPageCom/NotesIdea.jsx'
import CardComponents from '../Components/MainPageCom/CardComponents.jsx'
import CardForDetails from '../Components/MainPageCom/CardForDetails.jsx'
import FrictionThoughts from '../Components/MainPageCom/FrictionThoughts.jsx'
import Navbar from '../Components/NavBar.jsx'
import Testiminols from '../Components/MainPageCom/Testiminols.jsx'


const Mainpage = () => {
    return (
        <>
            <NotesIdea />
            <CardComponents />

              <FrictionThoughts />
              <Testiminols/>
               <CardComponents />
            {/* <AiAssistant /> */}
            {/* <BrainPower />
            <Meeting /> */}
            {/* <CardForDetails /> */}
  
            {/* <AiAssistant />
            <BrainPower />
            <Meeting />
            <CardForDetails /> */}
        
        </>
    )
}

export default Mainpage