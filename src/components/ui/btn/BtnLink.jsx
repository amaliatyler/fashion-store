// import './btn.scss';

function BtnLink(props) {
    return (
        <button className={`btn-link ${props.className}`} >{props.innerText}</button>
    )
}

export default BtnLink;