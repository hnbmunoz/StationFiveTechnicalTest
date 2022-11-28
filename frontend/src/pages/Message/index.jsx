import React, {useState} from 'react'
import { SmallModal } from '../../components/Modal/index.jsx'
import axios from 'axios'
import { v4 as uuidv4} from 'uuid' 


const Message = () => {  
  const [apiReply, setApiReply] = useState({}) 
  const [inputMessage, setInputMessage] = useState("")
  const [responseMessage, setResponseMessage] = useState("")

  const submitMessage = () => {     
    axios({
      method: 'post',
      url: 'http://localhost:3000/message',
      headers: {}, 
      data: {
        conversation_id: uuidv4(),
        message: inputMessage, // This is the body part
      }
    }).then(res => {
      setInputMessage("");
      console.log(res.data)
      setResponseMessage(res.data.response)
    }).catch(ex => {
      alert("Something went wrong. Please check the server API and try again");

      console.error(ex);
    });
  }

  const handleMessage = (e) => {
    setInputMessage(e.currentTarget.value)
  }

  return (
    <div className='message-container'>
      <SmallModal>
        <div className='message-content'>
          <div className='message-header'>
            Message Us
          </div>
          <input className='user-message' name="userMessage" placeholder='Write Message Here' value={inputMessage} onChange={handleMessage}/>
          <button onClick={submitMessage}> Send Message </button>    

          <div className='modal-details' style={{marginTop:'1rem'}}>{responseMessage}</div>
        </div>
      </SmallModal>
    </div>
  )
}

export default Message