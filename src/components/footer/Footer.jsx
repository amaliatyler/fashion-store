import Sprite from './../sprite/Sprite';


function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__body">
                <div className="footer__main">
                    <a href="#!" className="footer__logo">Fashion</a>
                    <div className="footer__text">Complete your style with awesome clothes from us.</div>
                    <div className="footer__social social">
                        <div className="social__list">
                            <li><a href="#!" className="social-list-item"><Sprite className="social__list-icon" iconName="facebook"/></a></li>
                            <li><a href="#!" className="social-list-item"><Sprite className="social__list-icon" iconName="instagram"/></a></li>
                            <li><a href="#!" className="social-list-item"><Sprite className="social__list-icon" iconName="twitter"/></a></li>
                            <li><a href="#!" className="social-list-item"><Sprite className="social__list-icon" iconName="linkedin"/></a></li>
                        </div>
                    </div>
                </div>
                <div className="footer__columns footer-menu">
                    <div className="footer-menu__column">
                        <ul className="footer-menu__list">
                            <li><a href="#!" className="footer-menu__link footer-menu__link_highlight">Company</a></li>
                            <li><a href="#!" className="footer-menu__link">About</a></li>
                            <li><a href="#!" className="footer-menu__link">Contact us</a></li>
                            <li><a href="#!" className="footer-menu__link">Support</a></li>
                            <li><a href="#!" className="footer-menu__link">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu__column">
                        <ul className="footer-menu__list">
                            <li><a href="#!" className="footer-menu__link footer-menu__link_highlight">Quick Link</a></li>
                            <li><a href="#!" className="footer-menu__link">Share Location</a></li>
                            <li><a href="#!" className="footer-menu__link">Orders Tracking</a></li>
                            <li><a href="#!" className="footer-menu__link">Size Guide</a></li>
                            <li><a href="#!" className="footer-menu__link">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu__column">
                        <ul className="footer-menu__list">
                            <li><a href="#!" className="footer-menu__link footer-menu__link_highlight">Legal</a></li>
                            <li><a href="#!" className="footer-menu__link">Terms & conditions</a></li>
                            <li><a href="#!" className="footer-menu__link">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
