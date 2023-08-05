
function CleanBtn({ setSearchValue, className} ) {
  return (
        <button  onClick={() => setSearchValue('')} type="clean-button button">
                <span className="sr-only">Close</span>
                <span className={`${className} clean-button__symbol`} aria-hidden="true"></span>
        </button>
  )
}

export default CleanBtn;