import saleImg from './../../img/images/m_sale-img.png';

import BtnLink from '../ui/btn/BtnLink';

function Sale() {
  return (
    <section className="sale">
        <div className="container">
            <div className="sale__content">
                <div className="sale__img">
                    <img src={saleImg} alt="Girl" />
                </div>
                <div className="sale__title">
                    <span>BLACK FRIDAY</span>
                        <span>Sale Now</span>
                    </div>
                <div className="sale__text">
                    <p className="sale__descr">Spend minimal $100 get 30% off
voucher code for your next purchase</p>
                    <p className="sale__date">1 June - 10 June 2021</p>
                    <p className="sale__terms">*Terms & Conditions apply</p>
                    <div className="sale__btn-wrapper">
                        <BtnLink className="sale__btn" innerText="Shop now"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sale;
