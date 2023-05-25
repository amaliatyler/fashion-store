import BtnLink from '../btn/BtnLink';
import './nav.scss';

function Nav(props) {
    return(
        <nav className={`nav ${props.className}`}>
            <ul className="nav__list list">
                <li><a href="#!" className="list__link">CATALOGUE</a></li>
                <li><a href="#!" className="list__link">FASHION</a></li>
                <li><a href="#!" className="list__link">FAVOURITE</a></li>
                <li><a href="#!" className="list__link">LIFESTYLE</a></li>
                <li><BtnLink className='nav__btn' innerText="Sign in"/></li>
            </ul>
        </nav>
    )
}

export default Nav;