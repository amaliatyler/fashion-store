import CloseBtn from "../ui/closeBtn/CloneBtn"

export const Modal = ({ icon }) => {
  return (
    <div className="overlay">
        <div className="modal">
                <CloseBtn className="modal__close"/>
                <img className="modal__icon" src={icon} alt="#"></img>
                <p className="modal__text">Thank for your subscription!</p>
        </div>
    </div>
  )
}
