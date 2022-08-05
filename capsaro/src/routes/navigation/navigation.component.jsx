import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CapLogo} from './../../assests/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return(
      <Fragment>
        <div className = 'navigation'>
          <Link className = 'logo-container' to ='/'>
          <CapLogo/>
          </Link>
          
          <div className = 'nav-links-container'>
            <Link className ='nav-link' to ='/shop'>
                Shop
            </Link>
            <Link className ='nav-link' to ='/shop'>
                Contact
            </Link>
            <Link className ='nav-link' to ='/sign-in'>
                Sign-In
            </Link>
          </div>
        </div>  
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;