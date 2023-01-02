import React from "react";
import BlogCards from "../Components/BlogCards";
import CreateBlog from "../Components/CreateBlog";
import {useState, useEffect} from 'react';

export default function Blog() {
  const [isShownForm, setIsShownForm] = useState(false);
  const [dataBlog, setDataBlog] = useState(() => {
    const localDataBlog = localStorage.getItem('dataBlog');
    return localDataBlog ? JSON.parse(localDataBlog) : [];
  });

  useEffect(() => {
    localStorage.setItem('dataBlog', JSON.stringify(dataBlog));
  }, [dataBlog]);

  const isClickedForm = () => {
    setIsShownForm(currentForm => !currentForm);
  };

   const [isShownBlog, setIsShownBlog] = useState(false);

   const isClickedBlog = () => {
     setIsShownBlog(currentBlog => !currentBlog);
   };


    return <>
      <div className="field padding-bottom--24">
        <button className='buttonstyle' onClick={isClickedForm}>Add new Blog</button>
        {isShownForm && <CreateBlog dataBlog={dataBlog} setDataBlog={setDataBlog} />}
      </div>
      
      <div className="field padding-bottom--24">
        <button className='buttonstyle' onClick={isClickedBlog}>Blogs List</button>
        {isShownBlog && <BlogCards dataBlog={dataBlog} />}
      </div>

      

    </>
  }