import Personality from "../../components/personality/personality";
import SaleBanner from "../../components/saleBanner/saleBanner";
import SalesProduct from "../../components/salesProduct/SalesProduct";
import Search from "../../components/search/Search";
import Sprite from "../../components/sprite/Sprite";
import { saleProducts } from "../../helpers/saleProductsList";


function SalesPage( { handleInput, searchValue, setSearchValue }) {
  return (
    <>
      <SaleBanner />
      <section className="discounts">
        <div className="discounts__wrapper">
          <div className="discounts__header">
            <h2 className="discounts__title section-title">{searchValue ? `Searching for: ${searchValue}` : `SUMMER SALE`}</h2>
            <span className="discounts__subtitle">Save up to 50%!</span>
            <Search handleInput={handleInput} searchValue={searchValue} setSearchValue={setSearchValue} className="discounts__search"/>
          </div>
          <div className="discounts__products product">
            {/* Сократить код и вынести логику в отдельную функцию */}
            {saleProducts.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((product, index) => {
              return (
                <SalesProduct
                  key={index}
                  title={product.title}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  rightsOwner={product.rightsOwner}
                  img={product.img}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Personality />
    </>
  );
}

export default SalesPage;
