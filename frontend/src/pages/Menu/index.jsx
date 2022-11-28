import React, {useState, useEffect} from 'react'
import { Slider, SliderItem } from '../../components/PanelSlider/index.jsx'
import axios from 'axios'
import { CustomRadio1, CustomRadio2, CustomRadio3 } from '../../components/RadioButton/index.jsx'

const Menu = ({enableSubmit}) => {
  const [rulesInfo, setRulesInfo] = useState();
  const [dietInfo, setDietInfo] = useState([]);
  const [mainCourse, setMainCourse] = useState([]);
  const [sideCourse, setSideCourse] = useState([]);
  const [radioGroupDisplay, setRadioGroupDisplay] = useState(0);
  const [restriction, setRestriction] = useState([])

  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedMain, setSelectedMain] = useState("");
  const [selectedSide, setSelectedSide] = useState("");

  useEffect(() => {
    getMenu()
    return() => {}
  },[])

  const getMenu = async () => {
    const { data } = await axios.get("http://localhost:3000/Menu");
    const { menus, rules} = await data
    const [dietary, mainDish, sideDish] = await menus
    await setDietInfo(dietary);
    await setMainCourse(mainDish);
    await setSideCourse(sideDish);
    await setRulesInfo(rules)
  };

  useEffect(() => {
    let [...targetEl] = document.querySelectorAll(`.slider-item`);
    targetEl.forEach((obj,index) => {
      if (radioGroupDisplay - 1 < index) {
        obj.classList.remove('force-remove');
      }
      else {
        obj.classList.add('force-remove');
      }      
    })
  },[radioGroupDisplay])

  const selectedItem = (e) => {    
    rulesInfo[e.target.dataset.id] && setRestriction(rulesInfo[e.target.dataset.id])
    let isRestricted = !handleRestriction(e.target.dataset.id)    
    isRestricted ? setRadioGroupDisplay(radioGroupDisplay + 1) : e.preventDefault();
    isRestricted ? fillUpSummary(e.currentTarget.dataset.name) : alert("Order combination invalid Please see menu restrictions")
  }

  const fillUpSummary = (order) => {    
    if (selectedDiet.trim() === "") {
      setSelectedDiet(order)
    } else {
      if (selectedMain.trim() === "") {
        setSelectedMain(order)
      } else {
        if (selectedSide.trim() === "") { setSelectedSide(order)}
        enableSubmit()
      }
    }
  }

  const handleRestriction = (menuID) => {   
    return restriction.some((itemID) => itemID == menuID)
  }

  return (
    <div className='menu-container'>
      <Slider >
        <SliderItem  displayIndex={radioGroupDisplay}>
          <div className='flex-row radio-groupings' style={{backgroundColor: 'transparent'}}>
            <div className='radio-grouping-header'> Select Dietary Restriction</div>
            { dietInfo.length > 0 && dietInfo.map( (obj, idx) => 
              <CustomRadio1 
                key={idx}
                itemIdx={obj.id}
                itemName={obj.value}
                itemGroup="Diet"
                selectedItem={selectedItem}
              />)
            }
          </div>
        </SliderItem>
        <SliderItem  displayIndex={radioGroupDisplay}>
          <div className='flex-row radio-groupings' style={{backgroundColor: 'transparent'}}>
            <div className='radio-grouping-header'> Select Main Course</div>
            { mainCourse.length > 0 && mainCourse.map( (obj, idx) => 
              <CustomRadio2
                key={idx}
                itemIdx={obj.id}
                itemName={obj.value}
                itemGroup="Main"
                selectedItem={selectedItem}
              />)
            }
          </div>
      </SliderItem>
      <SliderItem  displayIndex={radioGroupDisplay}>
        <div className='flex-row radio-groupings' style={{backgroundColor: 'transparent'}}>
           <div className='radio-grouping-header'> Select Sides</div>
          { sideCourse.length > 0 && sideCourse.map( (obj, idx) =>
            <CustomRadio3
              key={idx}
              itemIdx={obj.id}
              itemName={obj.value}
              itemGroup="Side"
              selectedItem={selectedItem}
            />)
          }        
        </div>
      </SliderItem>
      <SliderItem  displayIndex={radioGroupDisplay}>
        <div className='flex-row slider-summary'>
          <div className='modal-header'> Order Summary</div>
          <div className='modal-details'>Main: {selectedMain}</div>
          <div className='modal-details'>Side: {selectedSide}</div>
          <div className='modal-details'>Note: {selectedDiet}</div>
        </div>
      </SliderItem>
      {(sideCourse.length === 0 && dietInfo.length === 0 && mainCourse.length === 0) && <div>Loading...</div>}
      </Slider>    
    </div>
  )
}

export default Menu