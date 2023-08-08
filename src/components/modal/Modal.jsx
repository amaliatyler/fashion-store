import CloseBtn from "../ui/closeBtn/CloseBtn";

export const Modal = ({ icon, modalActive, setModalActive }) => {

  return (
    <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
      <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
        <CloseBtn parentClass="modal" setModalActive={setModalActive}/>
        <img className="modal__icon" src={icon} alt="#"></img>
        <p className="modal__text">Thank for your subscription!</p>
      </div>
    </div>
  );
};
