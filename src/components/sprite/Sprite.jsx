import sprite from './sprite.svg';


function Sprite(props) {
  return (
    <svg className={props.className}>
        <use href={`${sprite}#${props.iconName}`}></use>
    </svg>
  )
}

export default Sprite;
