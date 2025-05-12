import React from 'react'
import AiAssistant from '../Components/MainPageCom/AiAssistant'
import NotesIdea from '../Components/MainPageCom/NotesIdea.jsx'
import CardComponents from '../Components/MainPageCom/CardComponents.jsx'
import CardForDetails from '../Components/MainPageCom/CardForDetails.jsx'
import FrictionThoughts from '../Components/MainPageCom/FrictionThoughts.jsx'
import Navbar from '../Components/NavBar.jsx'


const Mainpage = () => {
    return(
        <>
           <NotesIdea />
            <CardComponents/>
            <AiAssistant />
            <CardForDetails/>
            <FrictionThoughts/>
        </>
    )
}

export default Mainpage