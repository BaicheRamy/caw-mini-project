import React, { useState } from "react";
import heartOutline from "./heart-outline.png"; 
import heartFill from "./heart-fill.png"; 
import { v4 as uuidv4 } from 'uuid';
import { DatePicker } from 'antd';
import moment from 'moment';

const {RangePicker} = DatePicker;



export default function BlogCards({dataBlog}) {
  const like= 200;
  const isLiked = true;

  const [dates, setDates] = useState(['01-01-0001']);
  console.log(dates);


  return (
    <>
    <div className="range-picker">
        <RangePicker
          onChange={(values) => {
            setDates(values.map(item=>{
              return moment(item).format('DD-MM-YYYY');
            }))
          }}
        />
    </div>

    {dataBlog.map((dataBlog) => (  
        
    
    <div className="card" key={uuidv4()}>
      <div className="card-header">
        <div className="profile">
          <span className="letter">{dataBlog.author}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{dataBlog.title}</h5>
          <div className="card-date">{dataBlog.date}</div>
        </div>
      </div>
      <div className="card-text">{dataBlog.description}</div>
      <div className="card-like-bar">
        {isLiked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{like}</b> like
        </div>
      </div>
    </div>

))}

    </>
  );
}