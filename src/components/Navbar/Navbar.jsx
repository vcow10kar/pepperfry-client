import SearchNavbar from "./SearchNavbar";
import Tabbar from "./Tabbar";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className= {styles.navbarDiv}>
            <SearchNavbar/>
            <Tabbar/>
        </div>
    )
}

export default Navbar;