function CloseBtn({ onCloseModal}) {
  return (
    <button onClick={onCloseModal} type="drawer__button button">
      <span className="sr-only">Close</span>
      <span className="button__symbol" aria-hidden="true">
        ×
      </span>
    </button>
  );
}
export default CloseBtn;
