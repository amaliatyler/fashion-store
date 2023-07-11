import promoImg from './../../img/images/promo.jpg';
import BtnLink from '../ui/btn/BtnLink';

function Promo() {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <h2 className="promo__title">
                            <span className="highlight">
                                <span>LET’S</span>
                            </span> EXPLORE 
                            <span className="highlight highlight--yellow">
                                <span>UNIQUE</span>
                            </span> CLOTHES.
                        </h2>
                    <div className="promo__text">
                        <p className="promo__descr">Live for Influential and Innovative fashion!</p>
                        <div className="promo__btn-wrapper">
                            <BtnLink className='promo__btn' innerText="Shop Now" />
                        </div>
                    </div>
                    {/* <div className="promo__img">
                        <img src={promoImg} alt="Promo" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Promo;
