import Sprite from "../sprite/Sprite";
import CleanBtn from "../ui/cleanBtn/CleanBtn";


function Search({className, searchValue, handleInput, setSearchValue }) {

    return (
        <div className={className + " search"}>
            <Sprite className="search__icon" id="search" iconName="search"/>
            <input onChange={handleInput} type="text" value={searchValue} placeholder="Search..." className="search__input"/>
            {searchValue && <CleanBtn searchValue={searchValue} setSearchValue={setSearchValue} />}
        </div>
    )
}

export default Search;
