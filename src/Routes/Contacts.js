import React from "react";
import {useState, useEffect} from 'react';
import CreateContact from '../Components/CreateContact';
import MyContacts from '../Components/MyContacts';

export default function Contacts() {
  const [isShownForm, setIsShownForm] = useState(false);
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem('data');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const isClickedForm = () => {
    setIsShownForm(currentForm => !currentForm);
  };
  const [isShownList, setIsShownList] = useState(false);

  const isClickedList = () => {
    setIsShownList(currentList => !currentList);
  };

 
  return (
    <>
      <div className="field padding-bottom--24">
        <button className='buttonstyle' onClick={isClickedForm}>Contact Form</button>
        {isShownForm && <CreateContact data={data} setData={setData} />}
      </div>
      <div className="field padding-bottom--24">
        <button className='buttonstyle' onClick={isClickedList}>Contact List</button>
        {isShownList && <MyContacts data={data} />}
      </div>
      
    </>
  );
}






























/*function isClicked(e) {
  const id = e.target.id;
  
  if (id === "list") {
    
    return "list"
  }
  else if (id === 'form') {
    
    return 2
  }
  return 1
}


export default function Contacts() {
    return <>
      <div>
        <button onClick={isClicked} id='list'>list</button>
        <button onClick={isClicked} id='form'>form</button>
      </div>
      <div className={isClicked==="list" ? "" : "hidden"}>
        <h2>Contact list</h2>
      </div>
      <div className={isClicked===2 ? "" : "hidden"}>
        <h2>
          Contact form
        </h2>
      </div>
        
    </>
  }*/