import React from 'react'
import AiAssistant from '../Components/MainPageCom/AiAssistant'
import BrainPower from '../Components/MainPageCom/BrainPower'
import Meeting from '../Components/MainPageCom/Meeting'
import NotesIdea from '../Components/MainPageCom/NotesIdea.jsx'
import Course from '../Components/MainPageCom/Course.jsx'
import CardComponents from '../Components/MainPageCom/CardComponents.jsx'
import CardForDetails from '../Components/MainPageCom/CardForDetails.jsx'
import FrictionThoughts from '../Components/MainPageCom/FrictionThoughts.jsx'
import Navbar from '../Components/NavBar.jsx'



const Mainpage = () => {
    return (
        <>
            <NotesIdea />
            <AiAssistant />
            <BrainPower />
            <Meeting />
            <Course />

        </>
    )
}

export default Mainpage