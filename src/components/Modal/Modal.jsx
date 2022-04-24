import { useEffect, useRef } from 'react';
import './modal.css';

const Modal = ({ isOpen, onModalOpen }) => {

  const modalRef = useRef(null)
  
  useEffect(() => {
    window.onclick = (event) => {
      if(event.target === modalRef.current){
        onModalOpen()
      }
    }
  }, [onModalOpen])
  

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} >
      <div className="modal-content" ref={modalRef}>
        <div className="modal-card">
          <span className="close" onClick={() => onModalOpen()}>&times;</span>
          test
        </div>
      </div>
    </div>
  )
}

export default Modal