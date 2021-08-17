import './Modal.css'
import { Fragment } from 'react'
import reactDom from 'react-dom'



const BackDrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onClose}>
            
        </div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
}



const Modal = (props) => {
    return (
        <Fragment>
          {reactDom.createPortal(<BackDrop onClose={props.onClose}/>, document.getElementById('modal-overlays'))}
          {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('modal-overlays'))}
        </Fragment>
    )
}

export default Modal
