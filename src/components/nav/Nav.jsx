import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import Sprite from '../sprite/Sprite';
import { useCart } from '../../hooks/useCart';

function Nav({className, handleCartClick}) {

    const { totalPriceAfterDiscount } = useCart();

    return(
        <nav className={`${className} nav`}>
            <ul className="nav__list list">
                <CustomLink to="/" className="list__link">HOME</CustomLink>
                <CustomLink to="/sales" className="list__link">SALE</CustomLink>
                <CustomLink to="/favorite" className="list__link">FAVOURITE</CustomLink>
                {/* <CustomLink to="/cart/" className="list__link list__link-cart" onClick={handleCartClick}>
                    <span>{totalPrice}$</span>
                    <Sprite className="list__cart" id="paper-bag" iconName="paperBag"/>
                </CustomLink> */}
                <li className="list__link list__link-cart" onClick={handleCartClick}>
                    <span>{totalPriceAfterDiscount}$</span>
                    <Sprite className="list__cart" id="paper-bag" iconName="paperBag"/>
                </li>
                <CustomLink to="/orders" className="list__link">ORDERS</CustomLink>
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