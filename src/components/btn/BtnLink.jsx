import './btn.scss';

function BtnLink(props) {
    return (
        <a className={`btn-link ${props.className}`} href="#!">{props.innerText}</a>
    )
}

export default BtnLink;