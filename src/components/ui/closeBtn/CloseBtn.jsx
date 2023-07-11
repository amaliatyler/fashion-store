
function CloseBtn({ setSearchValue, className} ) {
  return (
        <button  onClick={() => setSearchValue('')} type="close-button button">
                <span className="sr-only">Close</span>
                <span className={`${className} close-button__symbol`} aria-hidden="true"></span>
        </button>
  )
}

export default CloseBtn;