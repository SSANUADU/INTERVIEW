import React from 'react'
import { useState } from 'react'

export default function Contect() {
const [state , setState] = useState({
  name:"",
  mobile:"",
  email:""
})

  const handleChange = (e) =>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${state.name} ${state.mobile} ${state.email}`)
    console.log(state)
  }

  return (
      <>
    <div className='menus'>Contect</div>
    <div>
    <form onSubmit={handleSubmit}>
         <label>
           <p>Name</p>
           <input name="name" onChange={handleChange} />
         </label>
         <label>
           <p>mobile</p>
           <input name="mobile" onChange={handleChange} />
         </label>
         <label>
           <p>Email</p>
           <input name="email" onChange={handleChange} />
         </label>
         <br/>
       <button type="submit">Submit</button>
      </form>
    </div>
    </>

  )
}
