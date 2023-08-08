function CloseBtn({ parentClass, setModalActive }) {

  const defaultClass = 'close-button';
  const extra = parentClass ? ` ${parentClass}__${defaultClass} ${defaultClass}` : null;

  return (
    <button onClick={() => setModalActive(false)} type="button" className={extra ? extra : defaultClass}>
      <span className="sr-only">Close</span>
      <span className="close-button__symbol" aria-hidden="true">
        ×
      </span>
    </button>
  );
}
export default CloseBtn;
