import personalityImg from './../../img/sale-products/personality.jpg';

function Personality() {
  return (
    <section className="personality">
        <div className="personality__wrapper">
            <span className="personality__subtitle">In our store you will find whatever suits your personality</span>
            <span className="personality__subtitle">Whether your are a minimalist or bright colors and crazy designs lover!</span>
                <div className="personality__inner">
                    <div className="personality__pic">
                        <img src={personalityImg} alt="Girl in a hoodie and  blue jeans" className="personality__img"/>
                    </div>
                    <p className="personality__text">
                        One of the ways to express yourself is through your clothes. We truly believe it's important to look the way you feel inside, 
                        but to feel comfortable in the chosen clothes as well. It's not just about the colors, the brands or latest models. It's about your inner self, your principles and your relashionship with the rest of the world.
                        This is why we provide hight quality vegan clothing and services like "Recycling Swap". 
                    </p>
                    <span className="personality__rights">Author of photo Freepik</span>
            </div>
        </div>
    </section>
  )
}

export default Personality;
