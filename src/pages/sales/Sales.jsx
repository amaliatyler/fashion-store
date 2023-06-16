import Personality from "../../components/personality/personality";
import SaleBanner from "../../components/saleBanner/saleBanner";
import SalesProduct from "../../components/salesProduct/SalesProduct";
import { saleProducts } from "../../helpers/saleProductsList";

function SalesPage() {
  return (
    <>
      <SaleBanner />
      <section className="discounts">
        <div className="discounts__wrapper">
          <div className="discounts__header">
            <h2 className="discounts__title section-title">SUMMER SALE</h2>
            <span className="discounts__subtitle">Save up to 50%!</span>
          </div>
          <div className="discounts__products product">
            {saleProducts.map((product, index) => {
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
