import Card from '../cards/Card';
// import './arrivals.scss';

import {cards} from '../../helpers/cardsList';

function Arrivals() {
  return (

    <section className="arrivals">
      <div className="arrivals__container container">
        <h2 className="arrivals__title section-title">trending now</h2>
        <div className="arrivals__cards">
        {cards.map((card, index) => {
                        return <Card 
                            key = {index}
                            title = {card.title}
                            subtitle = {card.subtitle}
                            img= {card.img}
                            index={index}
                            newPrice={card.newPrice}
                            oldPrice={card.oldPrice}
                            rightsOwner={card.rightsOwner}
                            sale={card.sale}
                            newItem={card.newItem}
                            onAddToFavorite={() => alert('Товар добавлен в избранное')}
                            onAddToCart={() => alert('Товар добавлен в корзину')}
                            />
                    })}
        </div>
      </div>
    </section>
  )
}

export default Arrivals;
