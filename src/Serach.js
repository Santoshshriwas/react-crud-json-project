import { useState } from "react";
import axios from "axios";

const Serach=()=>{
  const [rno,setRno]=useState("");
  const [mydata,setMydata]=useState([]);


  const handelSubmit=()=>{
    let url=`http://localhost:4000/student/?rollno=${rno}`;
    axios.get(url).then((res)=>{
      console.log(res.data)
      if(res.data.length>=1){
        setMydata(res.data);
        document.getElementById('ans').innerHTML="";
      }else{
        // document.getElementById("error").innerHTML="No record Found..!!";
        alert("No Record Found?");
        // document.getElementById('ans').style.display='none';
      }
    })
    console.log(rno)
  }
  const ans=mydata.map((key)=>{
    return(
      <>
          <center>
          <div className="data">
             <div>{key.rollno}</div>
             <div>{key.name}</div>
             <div>{key.city}</div>
             <div>{key.tprice}</div>
             <div>{key.fees}</div>
          </div>
          </center> 
      </>
    );
  })
  return(
    <><div className="mainnn">
    <center><h1 className="sev"><b>Serach Data</b></h1></center>
      <center>
        <div className="dddd">
      <input type="text" placeholder="Enter P-Name"  onChange={(e)=>{setRno(e.target.value)}}/>
      </div>
      <button className="btn-1" onClick={handelSubmit}>SEARCH</button>
      </center>
      <center>
        <div className="dish-1">
            <div>Product Name</div>
            <div>Product Pricre</div>
            <div>Product Quantity</div>
            <div>Product T-Price</div>
            <div>Product Rating</div>
        </div>
        </center>
      {/* <div id="error"></div> */}
      <div id="ans">{ans}</div>
      </div>
      
    </>
  );
}
export default Serach;