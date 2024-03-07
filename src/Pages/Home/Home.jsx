import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Home/Hero";

export const HomeLayout = () => {
    return (
        <div >
            <Hero />
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