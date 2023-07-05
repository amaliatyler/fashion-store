import React from 'react';
import Card from '../cards/Card';
// import './arrivals.scss';

// import {cards} from '../../helpers/cardsList';

function Arrivals() {

  const [cards, setCards] = React.useState([
    {
        id: 1,
        title: 'Milk Hoodie',
        subtitle: 'Explore now!',
        img: './img/popular/cat-01.jpg',
        productsLink: '#!',
        rightsOwner: 'Freepik',
        newPrice: '25$',
        oldPrice: '40$',
        sale: false,
        newItem: true,
    },

    {
        id: 2,
        title: 'Grey blaser',
        subtitle: 'Explore now!',
        img: './../img/popular/cat-02.jpg',
        productsLink: '#!',
        rightsOwner: 'bristekjegor',
        newPrice: '55$',
        oldPrice: '70$',
        sale: true,
        newItem: false,
    },

    {
        id: 3,
        title: 'Green jacket',
        subtitle: 'Explore now!',
        img: './../img/popular/cat-03.jpg',
        productsLink: '#!',
        rightsOwner: 'bristekjegor',
        newPrice: '95$',
        oldPrice: '140$',
        sale: true,
        newItem: true,
    },

    {
        id: 4,
        title: 'White jacket',
        subtitle: 'Explore now!',
        img: './../img/popular/cat-04.jpg',
        productsLink: '#!',
        rightsOwner: 'bristekjegor',
        newPrice: '55$',
        oldPrice: '68$',
        sale: true,
        newItem: false,
    },

    {
        id: 5,
        title: 'Black jacket',
        subtitle: 'Explore now!',
        img: './../img/popular/cat-05.jpg',
        productsLink: '#!',
        rightsOwner: 'Freepik',
        newPrice: '70$',
        oldPrice: '110$',
        sale: false,
        newItem: false,
    },

    {
        id: 6,
        title: 'Black hat',
        subtitle: 'Explore now!',
        img: './../img/popular/cat-06.jpg',
        productsLink: '#!',
        rightsOwner: 'master1305',
        newPrice: '15$',
        oldPrice: '40$',
        sale: true,
        newItem: true,
    },

    {
        id: 7,
        title: 'Beige turtleneck',
        subtitle: 'Explore now!',
        img: './../img/popular/cat-07.jpg',
        productsLink: '#!',
        rightsOwner: 'Freepik',
        newPrice: '45$',
        oldPrice: '60$',
        sale: true,
        newItem: true,
    },

    {
        id: 8,
        title: 'Dark blue costume',
        subtitle: 'Explore now!',
        img: './../img/popular/cat-08.jpg',
        productsLink: '#!',
        rightsOwner: 'senivpetro',
        newPrice: '95$',
        oldPrice: '150$',
        sale: false,
        newItem: false,
    },
]);

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
