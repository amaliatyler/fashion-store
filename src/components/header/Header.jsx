import Nav from "../nav/Nav";
import Sprite from "../sprite/Sprite";

function Header({ handleCartClick }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <a href="/">
            <div className="header__logo">
              <Sprite id="logo" className="logo" iconName="logo" />
              <span>essential items</span>
            </div>
          </a>
          <Nav handleCartClick={handleCartClick} className="header__nav" />
          <div className="header__icon">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
