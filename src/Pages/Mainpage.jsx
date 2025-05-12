import React from 'react'
import AiAssistant from '../Components/MainPageCom/AiAssistant'

import BrainPower from '../Components/MainPageCom/BrainPower'
import Meeting from '../Components/MainPageCom/Meeting'

import NotesIdea from '../Components/MainPageCom/NotesIdea.jsx'



const Mainpage = () => {
    return(
        <>
           <NotesIdea />
            <AiAssistant />
            <BrainPower />
            <Meeting />
        </>
    )
}

export default Mainpage