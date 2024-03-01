import { useState } from "react";
import axios  from "axios";
const Insert=()=>{

  const [input,setInput]=useState({});
  const handelInput=(e)=>{
     let name =e.target.name;
     let value= e.target.value;
     setInput(Values=>({...Values,[name]:value}))
     console.log(input);
  }
  const handelSubmit=()=>{
     let api="http://localhost:4000/student";
     axios.post(api,input).then((res)=>{
      alert("Data Save!")
     })
     setInput({
      rollno:"",
      name:"",
      city:"",
      tprice:"",
      fees:""
     })
  }
  return(
    <>
    <center>
      <div className="Insert">
        <div className="I-second">
        <h1 className="Insert-1">Insert Record</h1>
       <b> Product Name: </b>  &nbsp;<input type="text" name="rollno"  value={input.     rollno} onChange={handelInput} className="Insert-2"/><br/><br/>
        <b>Product Price: </b>   &nbsp;&nbsp; <input type="text" name="name" value={input.name}      onChange={handelInput}/><br/><br/>
        <b>Product Quantity:</b><input type="text" name="city" value={input.city}      onChange={handelInput}/><br/><br/>
        <b>Product T-Price:</b>&nbsp;&nbsp;&nbsp;<input type="text" name="tprice" value={input.tprice}      onChange={handelInput}/><br/><br/>
        <b>Product Rating:</b>&nbsp;&nbsp;&nbsp;<input type="text" name="fees" value={input.fees}      onChange={handelInput}/><br/><br/>
        <button className="btn" onClick={handelSubmit}>Data Save!</button>
        </div> 
    </div>
    </center>
    </>
  );
}
export default Insert;