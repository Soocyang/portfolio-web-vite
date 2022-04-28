import { useEffect, useRef } from 'react';
import './modal.css';

const Modal = ({ isOpen, onModalOpen, currProj, children }) => {

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
        {children}
      </div>
    </div>
  )
}

export default Modal