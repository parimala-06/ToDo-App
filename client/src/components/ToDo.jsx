import axios from 'axios';
import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { baseURL } from '../utils/constant';

const ToDo = ({text, id, setUpdateUI, setShowPopup, setPopupContent}) => {

  const deleteToDo = () =>{
    axios.delete(`${baseURL}/delete/${id}`)
    .then(res => { 
      console.log(res.data);
      setUpdateUI((prevState)=> !prevState);
    })
  }

  const updateToDo = () =>{
    setPopupContent({text,id});
    setShowPopup(true)
  }

  return (
    <div className='toDo'>
    {text}
      <div className="icons">
        <MdEdit size={20} className='icon1' onClick={updateToDo}/>
        <MdDelete size={20} className='icon2' onClick={deleteToDo}/>
      </div>
    </div>

  )
}

export default ToDo