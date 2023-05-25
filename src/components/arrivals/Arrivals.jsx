import Card from '../cards/Card';
import './arrivals.scss';

import {cards} from './../../helpers/cardsList';

function Arrivals() {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="arrivals__title section-title">New Arrivals</h2>
        </div>
        <div className="arrivals__cards">
          {cards.map((card, index) => {
                        return <Card 
                            key = {index}
                            title = {card.title}
                            subtitle = {card.subtitle}
                            img= {card.img}
                            index={index}
                            />
                    })}
        </div>
      </div>
    </section>
  )
}

export default Arrivals;
