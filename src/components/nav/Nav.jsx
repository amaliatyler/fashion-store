import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import BtnLink from '../btn/BtnLink';
import Sprite from '../sprite/Sprite';

function Nav(props) {

    return(
        <nav className={`nav ${props.className}`}>
            <ul className="nav__list list">
                <CustomLink to="/" className="list__link">HOME</CustomLink>
                <CustomLink to="/sales" className="list__link">SALE</CustomLink>
                <CustomLink to="/favorite" className="list__link">FAVOURITE</CustomLink>
                <CustomLink to="/lifestyle" className="list__link">LIFESTYLE</CustomLink>
                <CustomLink to="/cart" className="list__link icon__link">
                    <Sprite className="list__cart" id="paper-bag" iconName="paperBag"/>
                    </CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props }) {
    // useResolvedPath is going to make sure that the used path is the full absolute path even if it starts out relative
    const resolvedPath = useResolvedPath(to);
    // using end to say that the entire path must match
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive ? '_active' : null}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Nav;