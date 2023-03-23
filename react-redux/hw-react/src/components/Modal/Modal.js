import React from 'react'
import Portal from './../Portal/Portal';

const Modal = ({ setIsModalOpen, handleSubmit, titleRef }) => {

  return (
    <Portal>
      <div className='overlay'>
        <div className='content'>
          <div className='modal__close'>
            <button className='close' type="button" onClick={() => setIsModalOpen(false)}>Х</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='modal__item'>
              <input id='title' type='text' ref={titleRef} />
              <button className='listButton' type='submit'>Добавить</button>
            </div>
          </form>
        </div>
      </div>
    </Portal>
  )
}

export default Modal