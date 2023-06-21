import { NavLink } from 'react-router-dom';

import BtnLink from '../btn/BtnLink';
import Sprite from '../sprite/Sprite';

function Nav(props) {

    return(
        <nav className={`nav ${props.className}`}>
            <ul className="nav__list list">
                <li><NavLink to="/" className="list__link">HOME</NavLink></li>
                <li><NavLink to="/sales" className="list__link">SALE</NavLink></li>
                <li><NavLink to="#" className="list__link">FAVOURITE</NavLink></li>
                <li><NavLink to="#" className="list__link">LIFESTYLE</NavLink></li>
                <li><Sprite className="list__cart" id="paper-bag" iconName="paperBag"/></li>
                {/* <li><NavLink><BtnLink className='nav__btn' innerText="Sign in"/></NavLink></li> */}
            </ul>
        </nav>
    )
}

export default Nav;