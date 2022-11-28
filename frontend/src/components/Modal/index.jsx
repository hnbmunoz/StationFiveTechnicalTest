import React from 'react'

export const CustomModal = ({children}) => {
  return (
    <div className='modal'>
      <div className='modal-container'>
        {children}
      </div>
    </div>
  )
}

export const SmallModal = ({children}) => {
  return (
    <div className='small-modal'>
        {children}
    </div>
  )
}

export const PopupModal = ({ closeModal }) => {
  const blurEffect = {
    position: "absolute",
    height: "100vh",
    width: "100%",
    backgroundColor: "#000",
    opacity: "0.8" 
  }

  const handleClickPopUp = () => {
    closeModal()
  }
  return (
    <>
    <div style={blurEffect} onClick={handleClickPopUp}></div>
    <div className="popUp-container" onClick={handleClickPopUp}>
      <div className="popUp-modal flex-column">
        <ul>
          <li>
            Vegetarian is NOT compatible with Cashew chicken, Sweet and sour pork, Massaman beef, Oyster sauce
          </li>
          <li>
            Nut allergy is NOT compatible with Cashew chicken, Peanut sauce,
          </li>
          <li>
            Halal is NOT compatible with Sweet and sour pork,
          </li>
          <li>
            Vegetable fried rice is NOT compatible with Steamed rice (you don't need more rice... carb overload),
          </li>
          <li>
            Pad thai is NOT compatible with Steamed rice (Pad thai comes with noodles),
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

