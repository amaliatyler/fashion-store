import Post from '../posts/Post';
import './favorite.css';

import post01img from "./../../img/images/promo-01.jpg";
import post02img from "./../../img/images/promo-02.jpg";

function Favorite() {
  return (
    <section className="favorite">
        <div className="container">
            <div className="favorite__header">
                <h2 className="favorite__title section-title">Young’s Favourite</h2>
            </div>
            <div className="favorite__posts">
                <Post title="Trending on instagram" img={post01img}/>
                <Post title="All Under $40" img={post02img}/>
            </div>
        </div>
    </section>
  )
}

export default Favorite;
