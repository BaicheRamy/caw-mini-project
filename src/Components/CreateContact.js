import React from 'react'


const CreateContact = ({data, setData}) => {


  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, phone } = e.target.elements
    let formInfo = {
      name: name.value,
      email: email.value,
      phone: phone.value,
    }
    setData ([...data, formInfo]);
    e.target.reset();

   
  }
  return (
        <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">Please enter your information</span>
              <form id="stripe-login" onSubmit={onSubmit}>
                
                 <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                        <label htmlFor="email">Email</label>
                    </div>
                  <input type="email" name="email" required></input>
                 </div>

                 <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                        <label htmlFor="name">Name</label>
                    </div>
                  <input type="text" name="name" required></input>
                 </div>

                 <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                  <input type="number" name="phone" required></input>
                 </div>
              
                 <div className="field padding-bottom--24">
                   <input type="submit" name="submit" className='buttonstyle' value="Add Contact"></input>
                 </div>
              </form>
            </div>
        </div>

  )
}
export default CreateContact;
