// import './application.scss';

import appStore from './../../img/icons/app-store.png';
import googlePlay from './../../img/icons/google-play.png';
import app from './../../img/images/vouchers-img.png';

function Application() {
  return (
    <section className="application">
        <div className="container">
            <div className="application__content">
                <div className="application__text">
                    <h2 className="application__title">
                    DOWNLOAD APP & GET THE VOUCHER!
                    </h2>
                    <p className="application__descr">
                    Get 30% off for first transaction using
                    Rondovision mobile app for now.
                    </p>
                    <div className="application__socials">
                        <a href="#!" className="application__link">
                            <img src={appStore} alt="App Store" />
                        </a>
                        <a href="#!" className="application__link">
                            <img src={googlePlay} alt="Google Play" />
                        </a>
                    </div>
                </div>
                <div className="application__img">
                    <img src={app} alt="App" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Application;
