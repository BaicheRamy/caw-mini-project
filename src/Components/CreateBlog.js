import React from 'react'


const CreateBlog = ({dataBlog, setDataBlog}) => {

    const onSubmit = (e) => {
      e.preventDefault()
      const { author, title, date, description } = e.target.elements
      let formInfo = {
        author: author.value,
        title: title.value,
        date: date.value,
        description: description.value,
      }
      setDataBlog ([...dataBlog, formInfo]);
      e.target.reset();
  
     
    }
    return (
          <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Please enter your information</span>
                <form id="stripe-login" onSubmit={onSubmit}>
                  
                   <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                          <label htmlFor="author">Author</label>
                      </div>
                    <input type="text" name="author" required></input>
                   </div>
  
                   <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                          <label htmlFor="title">Title</label>
                      </div>
                    <input type="text" name="title" required></input>
                   </div>
  
                   <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                          <label htmlFor="date">Date</label>
                      </div>
                    <input type="date" name="date" required></input>
                   </div>

                   <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                          <label htmlFor="description">Description</label>
                      </div>
                    <textarea name="description" required rows="5" ></textarea>
                   </div>
                
                   <div className="field padding-bottom--24">
                     <input type="submit" name="submit" className='buttonstyle' value="Submit Blog"></input>
                   </div>
                </form>
              </div>
          </div>
  
    )
  }
  export default CreateBlog;