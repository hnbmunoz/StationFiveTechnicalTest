import React,{useState, useEffect} from "react";

export const RoundedButton = ({ displayText = "Submit", buttonClick, disable=false }) => {
  const[isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    setIsDisabled(disable)
  },[disable]) 

  
  return (
    <div className="rounded-container">
      <button className={`btn-rounded ${isDisabled && 'disabled-button'}`} data-disabled={isDisabled} onClick={buttonClick}>
        {displayText}
      </button>
    </div>
  );
};

