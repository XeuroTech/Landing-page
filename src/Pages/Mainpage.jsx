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
import Trail from '../Components/MainPageCom/Trail.jsx'
import ReflectOtherApp from '../Components/MainPageCom/ReflectOtherApp.jsx'
import Testiminols from '../Components/MainPageCom/Testiminols.jsx'


const Mainpage = () => {
    return (
        <>
            <Navbar />
            <NotesIdea />
            <CardComponents />
            <AiAssistant />
            <BrainPower />

            <Meeting />
            <ReflectOtherApp />
            {/* <FrictionThoughts /> */}
            <Trail />
            <Testiminols />
            <Course />





            {/* <AiAssistant /> */}
            {/* <BrainPower />
            <Meeting /> */}
            {/* <CardForDetails /> */}

            {/* <AiAssistant />
            <BrainPower />
            <Meeting />
            <Trail />
            <Course />
            <ReflectOtherApp />
            {/* <FrictionThoughts /> */}



            {/* <CardComponents />
        <AiAssistant />
        <BrainPower />
        <Meeting />
        <CardForDetails />
        <FrictionThoughts /> */}






        </>
    )
}

export default Mainpage