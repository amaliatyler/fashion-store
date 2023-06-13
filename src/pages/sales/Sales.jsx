import SalesProduct from "../../components/salesProduct/SalesProduct";
import { saleProducts } from "../../helpers/saleProductsList";

import './sales.scss';

function SalesPage() {
    return (
        <div className="sales-spage">
            <div className="sales-page__header">
                <h2 className="sales-page__title section-title">SUMMER SALE</h2>
                <span className="sales-page__subtitle">save up to 50%!</span>
            </div>
            <div className="sales-page__products product">
            {saleProducts.map((product, index) => {
                        return <SalesProduct 
                            key = {index}
                            title = {product.title}
                            oldPrice = {product.oldPrice}
                            newPrice = {product.newPrice}
                            img= {product.img}
                            index={index}
                            />
                    })}
            </div>

        </div>
    );
}

export default SalesPage;