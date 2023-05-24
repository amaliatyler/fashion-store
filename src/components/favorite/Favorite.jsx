import Post from '../posts/Post';
import './favorite.css';

import {posts} from './../../helpers/postsList';

function Favorite() {
  return (
    <section className="favorite">
        <div className="container">
            <div className="favorite__header">
                <h2 className="favorite__title section-title">Young’s Favourite</h2>
            </div>
            <div className="favorite__posts">
                {posts.map((post, index) => {
                        return <Post 
                            key = {index}
                            title = {post.title}
                            subtitle = {post.subtitle}
                            img= {post.img}
                            index={index}
                            />
                    })}
            </div>
        </div>
    </section>
  )
}

export default Favorite;
