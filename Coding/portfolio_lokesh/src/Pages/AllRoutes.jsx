import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { AboutPage } from "./AboutPage";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/aboutme" element={<AboutPage/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
};

export default AllRoutes;