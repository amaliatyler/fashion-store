import logo from './../../img/icons/logo.svg';
import Nav from '../nav/Nav';

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                        <span>Fashion</span>
                    </div>
                    <Nav className="header__nav"/>
                </div>
            </div>
        </header>
    )
}

export default Header;