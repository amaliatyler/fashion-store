import Sprite from "../sprite/Sprite";


function Search(props) {

    return (
        <div className={props.className + " search"}>
            <Sprite className="search__icon" id="search" iconName="search"/>
            <input type="text" placeholder="Search..." className="search__input"/>
        </div>
    )
}

export default Search;
