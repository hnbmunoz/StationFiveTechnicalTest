import React, {useState} from 'react'
import Menu from './pages/Menu/index.jsx'
import Message from './pages/Message/index.jsx'
import { CustomModal, PopupModal } from './components/Modal/index.jsx'
import { RoundedButton } from './components/Button/index.jsx'
const App = () =>  { 
  const [showPopUp, setShowPopUp] = useState(false);
  const[disableSubmit, setDisableSubmit] = useState(true)

  const handleShowPop = () => {
    setShowPopUp(true);
  }

  const handleClosePop = () => {
    setShowPopUp(false)
  }

  const handleSubmitOrder = (e) => {
    if (e.currentTarget.dataset.disabled === 'true') return
    location.reload();
    alert('Order Submitted')
  }

  const enableSubmitButton = () => {
    setDisableSubmit(false)
  }

  return (
    <div className='App'>
      <div className='flex-column' style={{alignItems: 'center', justifyContent: 'center'}}>
      <CustomModal>
        <Menu enableSubmit={enableSubmitButton}/>  
        <Message />
      </CustomModal>
        <div className='flex-row'>
          <RoundedButton displayText='Show Menu Restrictions' buttonClick={handleShowPop}/>
          <RoundedButton displayText='Submit Order' buttonClick={handleSubmitOrder} disable={disableSubmit}/>
        </div>  
      </div>
      {showPopUp && <PopupModal closeModal={handleClosePop}/>}
    </div>
  )
}

export default App