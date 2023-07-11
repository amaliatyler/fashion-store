import Sprite from "../sprite/Sprite";
import CloseBtn from "../ui/closeBtn/CloseBtn";


function Search({className, searchValue, handleInput, setSearchValue }) {

    return (
        <div className={className + " search"}>
            <Sprite className="search__icon" id="search" iconName="search"/>
            <input onChange={handleInput} type="text" value={searchValue} placeholder="Search..." className="search__input"/>
            <CloseBtn searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    )
}

export default Search;
