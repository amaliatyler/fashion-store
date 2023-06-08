import Nav from '../nav/Nav';
import Sprite from '../sprite/Sprite';

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <Sprite id="logo" className="logo" iconName="logo"/>
                        <span>Fashion</span>
                    </div>
                    <Nav className="header__nav"/>
                    <div className="header__icon">
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;