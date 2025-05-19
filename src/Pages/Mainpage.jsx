import React from 'react'
// import AiAssistant from '../Components/MainPageCom/AiAssistant'

// import BrainPower from '../Components/MainPageCom/BrainPower'
// import Meeting from '../Components/MainPageCom/Meeting'

import NotesIdea from '../Components/MainPageCom/NotesIdea.jsx'
import CardComponents from '../Components/MainPageCom/CardComponents.jsx'
import CardForDetails from '../Components/MainPageCom/CardForDetails.jsx'
import FrictionThoughts from '../Components/MainPageCom/FrictionThoughts.jsx'
import Navbar from '../Components/NavBar.jsx'
import Calender from '../Components/MainPageCom/Calender.jsx'


const Mainpage = () => {
    return (
        <>
            <NotesIdea />
            <CardComponents />

              <FrictionThoughts />
              <Calender/>
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