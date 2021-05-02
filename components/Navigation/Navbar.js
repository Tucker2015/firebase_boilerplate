import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const NavBar = () => {

    return (

        <div className={classes.NavBar}>
            <div className={classes.logo}>MixShare Live PPV Events</div>
            <MobileNavigation />
            <Navigation />
        </div>

    )
}

export default NavBar