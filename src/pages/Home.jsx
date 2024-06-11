import Application from '../components/application/Application';
import Trending from '../components/trending/Trending';
import Brands from '../components/brands/Brands';
import Favorite from '../components/favorite/Favorite';
import Promo from '../components/promo/Promo';
import SignUp from '../components/signUp/SignUp';
import Sale from '../components/sale/Sale';

function Home({
  onPlus,
  items,
  onFavorite,
  cartItems,
  isLoading,
  modalActive,
  setModalActive,
}) {
  return (
    <>
      <Promo />
      <Trending
        onPlus={onPlus}
        items={items}
        onFavorite={onFavorite}
        cartItems={cartItems}
        isLoading={isLoading}
      />
      {/* <Brands />
      <Favorite />
      <Sale />
      <Application /> */}
      <SignUp modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
}

export default Home;
