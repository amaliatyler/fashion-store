function CloseBtn({ parentClass }) {

  const defaultClass = 'close-button';
  const extra = parentClass ? ` ${parentClass}__${defaultClass} ${defaultClass}` : null;

  return (
    <button onClick={() => console.log('closing modal')} type="button" className={extra ? extra : defaultClass}>
      <span className="sr-only">Close</span>
      <span className="close-button__symbol" aria-hidden="true">
        ×
      </span>
    </button>
  );
}
export default CloseBtn;
