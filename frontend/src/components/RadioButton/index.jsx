import React from 'react'

export const CustomRadio1 = ({itemName = "Test" , itemIdx = 0, itemGroup = "group1", selectedItem}) => {
  const itemSelected = (e) => {
    selectedItem(e)
  }
  return (
    <div className="custom-radio1">
        <input className="customRdo" type="radio" id={`customRadio1-${itemIdx}`} name={itemGroup}  />
        <label  id={itemIdx} className="rdo-input radio-grouping-details" htmlFor={`customRadio1-${itemIdx}`} data-id={itemIdx} data-name={itemName}  onClick={itemSelected}>
          {itemName}
        </label>
      </div>
  )
}

export const CustomRadio2 = ({itemName = "Test" , itemIdx = 0, itemGroup = "group2", selectedItem}) => {
  const itemSelected = (e) => {
    selectedItem(e)
  }
  return (
    <div className="custom-radio2" style={{position: 'relative', left: '-2rem'}}>
      <input id={`customRadio2-${itemIdx}`} className="type_1" type="radio" name={itemGroup} data-id={itemIdx} data-name={itemName} onClick={itemSelected} />
      <label className="radio-grouping-details" id={itemIdx} htmlFor={`customRadio2-${itemIdx}`} >
        {itemName}
      </label>
    </div>
  )
}

export const CustomRadio3 = ({itemName = "Test" , itemIdx = 0, itemGroup = "group3",  selectedItem}) => {
  const itemSelected = (e) => {
    selectedItem(e)
  }
  return (
    <div className="custom-radio3" style={{position: 'relative', left: '-2rem'}}>
      <input type="radio" id={`customRadio3-${itemIdx}`} name={itemGroup}  />
      <label className="radio-grouping-details" id={itemIdx} htmlFor={`customRadio3-${itemIdx}`} data-id={itemIdx} data-name={itemName} onClick={itemSelected}>
        {itemName}
      </label>    
    </div>
  )
}

