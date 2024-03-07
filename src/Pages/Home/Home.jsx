import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Home/Hero";
import MainContainer from "../../Components/Home/MainContainer";
import Features from "../../Components/Home/Features/Features";
import Footer from "../../Components/Footer/Footer";

export const HomeLayout = () => {
    return (
        <div className="">
            <Hero />
            <MainContainer/>
            <Features/>
            <Footer/>
        </div>
    );
}


const Home = () => {
    return (
        <div>
            <div className=" h-screen">

                <div className=" mb-[72px]">
                    <NavBar />
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default Home