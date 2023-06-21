// import './brands.scss';

import hugoBoss from './../../img/brands/hugo-boss.png';
import gap from './../../img/brands/gap.png';
import zara from './../../img/brands/zara.png';
import lacoste from './../../img/brands/Lacoste.png';
import levis from './../../img/brands/Levis.png';
import abercrombie from './../../img/brands/abercrombie.png';

function Brands() {
  return (
    <section className="brands">
        <div className="container">
            <ul className="brands__list">
                <li><a href="#!"><img src={hugoBoss} alt="Hugo-boss"></img></a></li>
                <li><a href="#!"><img src={gap} alt="Gap"></img></a></li>
                <li><a href="#!"><img src={zara} alt="Zara"></img></a></li>
                <li><a href="#!"><img src={lacoste} alt="Lacoste"></img></a></li>
                <li><a href="#!"><img src={levis} alt="Levi's"></img></a></li>
                <li><a href="#!"><img src={abercrombie} alt="Abercrombie & Fitch"></img></a></li>
            </ul>
        </div>
    </section>
  )
}

export default Brands;
