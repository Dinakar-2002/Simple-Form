import React, { useState } from 'react'

const style={
    display: "flex",
    flexDirection: "column",
    width:"50%",
    gap:"10px",
    margin:"auto",
    marginTop: "20px"
  }
function Form() {
    const [data,setData] = useState({name:"",email:"",password:""});
    const [error,setError] = useState({name:false,email:false,password:false});
    
    function handleChange(e){
        // console.log(e.target.value);       // /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test("a@gmail.com")   ///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test("hjk@vj78H")
        const {name,value}=e.target;
        setData(()=>({
          ...data,
          [name]:value,
        }));
    };

    function submitHandler(e){
      e.preventDefault();

      let user_Name=data.name;
      let user_Email=data.email;
      let user_Pswrd=data.password;

      if(user_Name.length<3) 
        setError((prev)=>({
        ...prev,
        name:true
    }))
   
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_Email))
        setError((prev)=>({
          ...prev,
          email:true
      }))
      if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(user_Pswrd)) 
        setError((prev)=>({
          ...prev,
          password:true
      }));
      //If all inputs are valid then only Show The Console
      // console.log(error);
      if(error.name===false && error.email===false && error.password===false){
        console.log( data );
      }else{
        console.log("Correct aagi Fill Maado Lowda");
      }
    }
    
  return (
    <form style={style} onSubmit={submitHandler} noValidate>
      <input  required type='text' name='name' value={data.name}  placeholder='Enter Your Name' onChange={handleChange} />
            {error.name===true && <span style={{color:"red"}}>Invalid Name</span>}
      <input  required type='email' name='email' value={data.email} placeholder='Enter Your Email' onChange={handleChange}   />   
            {error.email===true && <span style={{color:"red"}}>Invalid Email</span>}
      <input  required  type='password' name='password' value={data.password} placeholder='Enter Your Password'  autoComplete="currentPassword" onChange={handleChange}   />
            {error.password===true && <span style={{color:"red"}}>Invalid Password</span>}
      <button type='submit'>submit</button>
    </form>
  )
}

export default Form
