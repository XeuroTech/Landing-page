import React from 'react'
import AiAssistant from '../Components/MainPageCom/AiAssistant'
import BrainPower from '../Components/MainPageCom/BrainPower'
import Meeting from '../Components/MainPageCom/Meeting'
import NotesIdea from '../Components/MainPageCom/NotesIdea.jsx'
import Course from '../Components/MainPageCom/Course.jsx'
import CardComponents from '../Components/MainPageCom/CardComponents.jsx'
import CardForDetails from '../Components/MainPageCom/CardForDetails.jsx'
import FrictionThoughts from '../Components/MainPageCom/FrictionThoughts.jsx'

import Testiminols from '../Components/MainPageCom/Testiminols.jsx'
import Footer from '../Components/MainPageCom/Footer.jsx'

import Navbar from '../Components/NavBar.jsx'
import Trail from '../Components/MainPageCom/Trail.jsx'
import ReflectOtherApp from '../Components/MainPageCom/ReflectOtherApp.jsx'
import Calender from '../Components/MainPageCom/Calender.jsx'


const Mainpage = () => {
    return (
        <>


            <AiAssistant />
            <FrictionThoughts />
            <Testiminols />

            <Calender />

            <Footer />







            {/* <AiAssistant /> */}
            {/* <BrainPower />
            <Meeting /> */}
            {/* <CardForDetails /> */}

            {/* <AiAssistant />
            <BrainPower />
            <Meeting />
            <Trail />

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