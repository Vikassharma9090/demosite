import React, { useState } from "react";
const Contact=()=>{
const [data,setData]=useState({
fullname:"",
phone:"",
email:"",
massage:"",
});
const InputEvent=(event)=>{
const{name,value}=event.target;
setData((preval)=>{
return{
...preval,
[name]:value,
}
})
};
const fromSubmit=(event)=>{
event.preventDefault();
alert(`My name is ${data.fullname}`);
// alert(`My name is ${data.fullname} . My Mobile number is ${data.phone}. My Email is ${data.email}, Say Something ${data.massage}`);
};
return(
<>
<div className="my-5">
  <h1 className="text-center">Contact Us </h1>
</div>
<div className="container contact_div">
  <div className="row">
    <div className="col-md-6 col-10 mx-auto">
      
      <from onSubmit={fromSubmit}>
      <div className="mb-3">
        
        <label for="exampleFormControlInput1" className="form-label">FullName</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your FullName"
        name="fullname"
        value={data.fullname}
        onChange={InputEvent}
        />
      </div>
      <div className="mb-3">
        
        <label for="exampleFormControlInput1" className="form-label">Phone</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number"
        name="phone"
        value={data.phone}
        onChange={InputEvent}
        />
      </div>
      <div className="mb-3">
        
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"
        name="email"
        value={data.email}
        onChange={InputEvent}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
        name="massage"
        value={data.massage}
        onChange={InputEvent}
        ></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-outline-primary" type="submit">Submit form</button>
      </div>
      </from>
      
    </div>
  </div>
</div>
</>
);
};
export default Contact;