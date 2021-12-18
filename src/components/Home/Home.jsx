


const Home = () => {
  return <h1>HOME PAGE</h1>;
};

import SearchNavbar from "../Navbar/SearchNavbar";
import {BestOfBlackFryDay, ForgettingSomething} from "./BestOfBlackFryDay/BestOfBlackFryDay";
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
       <h1>Home Page</h1>
            <SearchNavbar />
            <BestOfBlackFryDay/>
            <ShopAllDay />
            <ForgettingSomething/>
           
        </div>

    )
}


export default Home;
