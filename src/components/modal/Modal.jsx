import CloseBtn from "../ui/closeBtn/CloseBtn"

export const Modal = ({ icon, openModal, setOpenModal}) => {
  return (
    <div className="overlay">
        <div className="modal">
                <CloseBtn parentClass="modal" setOpenModal={setOpenModal}/>
                <img className="modal__icon" src={icon} alt="#"></img>
                <p className="modal__text">Thank for your subscription!</p>
        </div>
    </div>
  )
}
