// import './post.scss';

import arrow from "./../../img/icons/arrow.svg";

function Post({title, img}) {
  return (
    <a href="#!">
        <div className="post">
            <img src={img} alt={title} className="post__img _pic" />
            <div className="post__body">
                <div className="post__text">
                    <div className="post__title">{title}</div>
                    <div className="post__muted">Explore now!</div>
                    <span className="post__rights rights">Image by</span>
                </div>
                <div className="post__icon">
                    <img src={arrow} alt="Arrow" />
                </div>
            </div>
        </div>
    </a>
  )
}

export default Post;
