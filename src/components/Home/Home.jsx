import Footer from "../footer/Footer";
import SearchNavbar from "../Navbar/SearchNavbar";
import {BestOfBlackFryDay, ForgettingSomething} from "./BestOfBlackFryDay/BestOfBlackFryDay";
import Bankoffer from "./components/Bankoffer";
import DonotMiss from "./components/DonotMiss";
import LatestDesign from "./components/LatestDesign";
import HomeHeroComponent from "./HomeHeroComponent/HomeHeroComponent";
import ShopAllDay from "./ShopAllDay/ShopAllDay";

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } 
        // else {
        //     reveals[i].classList.remove('active');
        // }
    }
}

window.addEventListener("scroll", reveal);


const Home = () => {
    return (
        <div>
            <SearchNavbar />
            <HomeHeroComponent/>
            <Bankoffer/>
            <LatestDesign/>
            <DonotMiss/>
            <BestOfBlackFryDay/>
            <ShopAllDay />
            <ForgettingSomething/>

            <Footer/>
        </div>

    )
}


export default Home;
