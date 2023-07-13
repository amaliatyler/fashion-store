import Card from "../../components/cards/Card";

function FavoritePage({ onAddToFavorite, items = [] }) {
  return (
        <div className="favorite">
        <div className="favorite__container container">
          <h2 className="favorite__title section-title">Favorites</h2>
          <div className="favorite__cards">
            {items.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  img={item.img}
                  index={index}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  rightsOwner={item.rightsOwner}
                  sale={item.sale}
                  newItem={item.newItem}
                  onAddToFavorite={onAddToFavorite}
                //   onPlus={onPlus}
                //   onFavorite={onFavorite}
                />
              );
            })}
          </div>
        </div>
      </div>
  )
}

export default FavoritePage;
